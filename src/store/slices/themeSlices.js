import { createSlice } from "@reduxjs/toolkit";

//{initialState,name,reducer} - завжди
 const initialState = {
  isLight: true,
};

const themeSlice = createSlice({
  initialState,
  name: "theme",
  reducers: {
    changeTheme: (state, action) => {
      state.isLight = action.payload;
    },
  },
});

const {reducer,actions }= themeSlice

export const {changeTheme} = actions

export default reducer