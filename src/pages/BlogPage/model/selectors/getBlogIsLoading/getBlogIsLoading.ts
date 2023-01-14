import { createSelector } from "@reduxjs/toolkit";
import { getBlogState } from "../getBlogState/getBlogState";

export const getBlogIsLoading = createSelector(
  getBlogState,
  (state) => state?.isLoading
);
