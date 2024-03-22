import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../src/features/taskSlice.js";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export default store;
