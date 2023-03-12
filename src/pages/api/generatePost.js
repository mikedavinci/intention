import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { Configuration, OpenAIApi } from 'openai';
import clientPromise from '../../lib/mongodb';

export default withApiAuthRequired(async function handler(req, res) {
  const { user } = await getSession(req, res);
  const client = await clientPromise;
  const db = client.db('Intention');
  const userProfile = await db.collection('users').findOne({
    auth0Id: user.sub,
  });

  if (!userProfile?.availableTokens) {
    res.status(403).json({ error: 'User not found' });
    return;
  }

  const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });

  const openai = new OpenAIApi(config);

  const { topic, keywords } = req.body;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    temperature: 0.3,
    max_tokens: 3600,
    prompt: `Write a long and detailed seo-friendly blog post about ${topic} that targets the following comma-separated keywords: ${keywords}. The content should be formatted in SEO-friendly HTML.
    The response must also include appropriate HTML title and meta description content.
    The return format must be stringified JSON in the following format: 
    {
      "postContent": "The HTML content of the blog post",
      "title": "The title of the blog post",
      "description": "The meta description of the blog post",
      "choices": [
        {
          "text": "The text of the first choice",
          "finish_reason": "stop"
        },
      ]
    } `,
  });

  console.log('response', response.data.choices[0]?.text);

  await db.collection('users').updateOne(
    { auth0Id: user.sub },
    {
      $inc: {
        availableTokens: -1,
      },
    }
  );

  const parsed = JSON.parse(
    response.data.choices[0]?.text?.split('\n').join('') || 'No content found'
  );

  const post = await db.collection('posts').insertOne({
    postContent: parsed?.postContent,
    title: parsed?.title,
    description: parsed?.description,
    topic,
    keywords,
    userId: userProfile._id,
    createdAt: new Date(),
  });

  console.log('post', post);

  res.status(200).json({
    postId: post.insertedId,
  });
});
