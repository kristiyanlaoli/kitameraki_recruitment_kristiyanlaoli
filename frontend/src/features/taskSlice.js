import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tasks: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  isAddingTask: false,
  category: "urgent",
  message: "",
};

export const getTask = createAsyncThunk("task/getTask", async (_, thunkAPI) => {
  try {
    const response = await axios.get(
      "http://localhost:4200/api/tasks?page=1&pageSize=200"
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const addTask = createAsyncThunk(
  "task/addTask",
  async (task, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:4200/api/tasks", {
        title: task.title,
        summary: task.summary,
        category: task.category,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    reset: () => initialState,
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setIsAddingTask: (state, action) => {
      state.isAddingTask = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Get task data
    builder.addCase(getTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.tasks = action.payload;
    });
    builder.addCase(getTask.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Add task data
    builder.addCase(addTask.pending, (state) => {
      state.isAddingTask = true;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.isAddingTask = false;
      state.isSuccess = true;
      state.tasks = [...state.tasks, action.payload];
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.isAddingTask = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset, setCategory, setIsAddingTask } = taskSlice.actions;
export default taskSlice.reducer;