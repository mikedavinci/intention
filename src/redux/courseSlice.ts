import { createSlice } from '@reduxjs/toolkit';

// coursesSlice
const initialCoursesState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState: initialCoursesState,
  reducers: {
    setCourses: (state: any, action: any) => {
      state.courses = action.payload;
    },
    addCourse: (state: any, action: any) => {
      state.courses.push(action.payload);
    },
  },
});

export const { setCourses, addCourse } = coursesSlice.actions;
export const coursesReducer = coursesSlice.reducer;
