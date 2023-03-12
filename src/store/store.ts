import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { userReducer, UserState } from './user/user.reducer';
import { projectReducer, ProjectState } from './project/project.reducer';

// Define the root state interface
export interface RootState {
  user: UserState;
  project: ProjectState;
}

// Combine all the reducers into a single root reducer
const rootReducer = combineReducers<RootState>({
  user: userReducer,
  project: projectReducer,
});

// Define the middleware to apply to the store
const middleware = [thunkMiddleware];

// Define the enhancers to apply to the store
const enhancers = [];

// Enable the Redux DevTools Extension if it's available
if (
  process.env.NODE_ENV === 'development' &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

// Define the composed enhancers with the middleware applied
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

// Define the makeStore function for next-redux-wrapper
const makeStore: MakeStore<RootState> = () => {
  return createStore(rootReducer, composedEnhancers);
};

// Create the wrapper with the makeStore function
const wrapper = createWrapper<RootState>(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

// Export the store and typed useSelector hook with the wrapper
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export { wrapper };
