import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Recipe } from "../../modle/recipe";

export const getRecipes = createAsyncThunk('recipes/fetch', async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:3000/api/recipes");
        // console.log("response------------", response.data);

        return response.data as Recipe[];
    } catch (error: any) {
        // console.error("Fetch error:", error);
        // console.error("Error details:", error.response);
        return thunkAPI.rejectWithValue(error.response?.data || "Unknown error")
    }
});

export const postRecipes = createAsyncThunk('recipes/post', async (newRecipe: Recipe, thunkAPI) => {
    console.log("newRecipe", newRecipe);

    try {
        const response = await axios.post("http://localhost:3000/api/recipes", newRecipe);
        return response.data as Recipe; // מחזירים את המתכון שנוסף
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [] as Recipe[],
        loading: false,
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRecipes.pending, (state) => {
                state.loading = true;
                state.error = '';
                console.log("loading");

            })
            .addCase(getRecipes.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
                state.loading = false;
                state.error = '';
                console.log("Received recipes:", action.payload);
                state.recipes = action.payload;
                console.log("exlent");
                console.log("state.recipes", state.recipes);

            })
            .addCase(getRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'error';
            })
            .addCase(postRecipes.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(postRecipes.fulfilled, (state, action: PayloadAction<Recipe>) => {
                state.loading = false;
                state.error = '';
                state.recipes.push(action.payload);
            })
            .addCase(postRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'error';
            });
    }
});
export default recipeSlice.reducer;
