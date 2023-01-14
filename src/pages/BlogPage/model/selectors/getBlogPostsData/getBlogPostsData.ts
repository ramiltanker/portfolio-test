import { createSelector } from "@reduxjs/toolkit";
import { getBlogState } from "../getBlogState/getBlogState";

export const getBlogPostsData = createSelector(
  getBlogState,
  (state) => state?.posts || []
);
