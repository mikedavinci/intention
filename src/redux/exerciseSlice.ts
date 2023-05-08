import { createSlice } from '@reduxjs/toolkit';

// exercisesSlice
const initialExercisesState = {
  exercises: [],
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: initialExercisesState,
  reducers: {
    setExercises: (state: any, action: any) => {
      state.exercises = action.payload;
    },
    addExercise: (state: any, action: any) => {
      state.exercises.push(action.payload);
    },
  },
});

export const { setExercises, addExercise } = exercisesSlice.actions;
export const exercisesReducer = exercisesSlice.reducer;
