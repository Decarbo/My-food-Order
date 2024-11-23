import { configureStore } from '@reduxjs/toolkit';
import nirajreducer from "./slice"
const appStore = configureStore({
   reducer:{
         carttt:nirajreducer,
         // user:nirajreducer,
   }
});

export default appStore;
