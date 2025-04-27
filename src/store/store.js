import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlices'
import themeReducer from './slices/themeSlices';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer
  },
});

export default store;
// {
//   counter:{
//     count: 0,
//     step: 1,
//   },
//   {usersData:{
//     users:[],
//     isFetching:false,
//     error:null
//   }}
// }