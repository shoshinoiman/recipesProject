import { createBrowserRouter, redirect } from "react-router";
import Home from "./components/bar/Home";
import About from "./components/bar/About";
import AppLayout from "./components/bar/AppLayout";
import RecipesList from "./components/recipes/recipesList";
import AddRecipe from "./components/recipes/addRecipe";
import { userContext } from "./App";
import { useContext } from "react";

const checkAuth = () => {
const { user } = useContext(userContext);
  if (!user?.isConnected) {
        return redirect("/");
  }
  return null;
};

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <>main error</>,
    children: [
      { index: true, element: <Home /> }, // `index: true` מחליף `path: '/'`
      { path: "/about", element: <About /> },
      { path: "/recipes", element: <RecipesList /> },
      { path: "/addRecipe", element: <AddRecipe />}, // בדיקת התחברות
    ],
  },
]);
