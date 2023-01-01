import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = {
  loading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    openLoading: (initialState) => ({
      ...initialState,
      loading: true,
    }),
    closeLoading: (initialState) => ({
      ...initialState,
      loading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openLoading: openLoadingActionCreator,
  closeLoading: closeLoadingActionCreator,
} = uiSlice.actions;
