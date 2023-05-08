import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../authSlice';
import { coursesReducer } from '../courseSlice';
import { projectsReducer } from '../projectSlice';
import { exercisesReducer } from '../exerciseSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
    projects: projectsReducer,
    exercises: exercisesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
