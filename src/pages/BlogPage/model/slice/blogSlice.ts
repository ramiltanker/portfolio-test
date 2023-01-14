import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBlogPosts } from "../services/getBlogPosts";
import { PostType } from "../types/blog";
import { BlogSchema } from "../types/blog";

const initialState: BlogSchema = {
  posts: [],
  isLoading: false,
  error: undefined,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogPosts.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getBlogPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getBlogPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: blogActions } = blogSlice;
export const { reducer: blogReducer } = blogSlice;
