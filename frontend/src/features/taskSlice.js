import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tasks: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  isAddingTask: false,
  isEditingTask: false,
  editTaskId: null,
  category: "urgent",
  filteredCategory: "all",
  message: "",
};

export const getTask = createAsyncThunk(
  "task/getTask",
  async (pages, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:4200/api/tasks?page=${pages.page}&pageSize=${pages.pageSize}`
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

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

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:4200/api/tasks/${id}`
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const editTask = createAsyncThunk(
  "task/editTask",
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(
        `http://localhost:4200/api/tasks/${task.id}`,
        {
          title: task.title,
          summary: task.summary,
          category: task.category,
        }
      );
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
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setIsAddingTask: (state, action) => {
      state.isAddingTask = action.payload;
    },
    setFilteredCategory: (state, action) => {
      state.filteredCategory = action.payload;
    },
    setIsEditingTask: (state, action) => {
      state.isEditingTask = action.payload;
    },
    setEditTaskId: (state, action) => {
      state.editTaskId = action.payload;
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
      state.tasks = [...state.tasks, ...action.payload];
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

    // Delete task data
    builder.addCase(deleteTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Edit task data
    builder.addCase(editTask.pending, (state) => {
      state.isEditingTask = true;
    });
    builder.addCase(editTask.fulfilled, (state, action) => {
      state.isEditingTask = false;
      state.isSuccess = true;
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    });
    builder.addCase(editTask.rejected, (state, action) => {
      state.isEditingTask = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const {
  setCategory,
  setIsAddingTask,
  setFilteredCategory,
  setIsEditingTask,
  setEditTaskId,
} = taskSlice.actions;
export default taskSlice.reducer;
