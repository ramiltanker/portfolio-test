import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { PortfolioType } from "../types/portfolio";

export const getPortfolioWorks = createAsyncThunk<
  PortfolioType[],
  void,
  ThunkConfig<string>
>(
  "portfolio/getPortfolioWorks",
  async (_, { rejectWithValue, dispatch, extra }) => {
    try {
      const response = await extra.api.get<PortfolioType[]>("/portfolio");

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  }
);
