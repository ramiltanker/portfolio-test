import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { PostType } from "../types/blog";

export const getBlogPosts = createAsyncThunk<
  PostType[],
  void,
  ThunkConfig<string>
>("portfolio/getBlogPosts", async (_, { rejectWithValue, dispatch, extra }) => {
  try {
    const response = await extra.api.get<PostType[]>("/posts");

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
