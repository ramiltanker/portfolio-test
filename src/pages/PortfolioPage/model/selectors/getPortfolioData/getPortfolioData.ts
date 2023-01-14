import { createSelector } from "@reduxjs/toolkit";
import { getPortfolioState } from "../getPortfolioState/getPortfolioState";

export const getPortfolioData = createSelector(
  getPortfolioState,
  (state) => state?.portfolio || []
);
