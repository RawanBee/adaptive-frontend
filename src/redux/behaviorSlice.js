import { createSlice } from "@reduxjs/toolkit";

const behaviorSlice = createSlice({
  name: "behavior",
  initialState: {
    clicks: 0,
    scrollDepth: 0,
  },
  reducers: {
    setClicks: (state, action) => {
      state.clicks = action.payload;
    },
    setScrollDepth: (state, action) => {
      state.scrollDepth = action.payload;
    },
  },
});

export const { setClicks, setScrollDepth } = behaviorSlice.actions;
export default behaviorSlice.reducer;
