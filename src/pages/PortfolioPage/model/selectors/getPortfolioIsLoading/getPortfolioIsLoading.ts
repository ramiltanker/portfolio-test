import { createSelector } from "@reduxjs/toolkit";
import { getPortfolioState } from "../getPortfolioState/getPortfolioState";

export const getPortfolioIsLoading = createSelector(
  getPortfolioState,
  (state) => state?.isLoading
);
