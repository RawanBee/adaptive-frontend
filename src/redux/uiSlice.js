import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    layout: "A", // Default layout is 'A' (Beginner view)
  },
  reducers: {
    setLayout: (state, action) => {
      state.layout = action.payload; // 'A' or 'B'
    },
  },
});

export const { setLayout } = uiSlice.actions;
export default uiSlice.reducer;
