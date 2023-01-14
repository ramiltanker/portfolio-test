import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPortfolioWorks } from "../services/getPortfolioWorks";
import { PortfolioSchema } from "../types/portfolio";

const initialState: PortfolioSchema = {
  portfolio: [],
  isLoading: false,
  error: undefined,
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPortfolioWorks.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getPortfolioWorks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.portfolio = action.payload;
      })
      .addCase(getPortfolioWorks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: portfolioActions } = portfolioSlice;
export const { reducer: portfolioReducer } = portfolioSlice;
