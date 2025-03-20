import { configureStore } from "@reduxjs/toolkit";
import behaviorReducer from "./redux/behaviorSlice";
import uiReducer from "./redux/uiSlice";

export const store = configureStore({
  reducer: {
    behavior: behaviorReducer,
    ui: uiReducer,
  },
});
