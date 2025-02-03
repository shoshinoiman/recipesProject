import { configureStore } from "@reduxjs/toolkit";
import { recipeSlice } from "../components/recipes/reciepsFetch";
// import { userContext } from "../App";
export const Store = configureStore({
  reducer: {
    recipes: recipeSlice.reducer,
  }
})
export type AppDispatch = typeof Store.dispatch;

