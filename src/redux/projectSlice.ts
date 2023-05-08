import { createSlice } from '@reduxjs/toolkit';

// projectsSlice
const initialProjectsState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState: initialProjectsState,
  reducers: {
    setProjects: (state: any, action: any) => {
      state.projects = action.payload;
    },
    addProject: (state: any, action: any) => {
      state.projects.push(action.payload);
    },
  },
});

export const { setProjects, addProject } = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;
