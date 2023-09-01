import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import taskService from "./taskService";

const initialState = {
  task: [],
  tasks: [],
};

export const getTaskList = createAsyncThunk("tasks/getAll", async () => {
  return await taskService.getTaskList();
});

export const getTaskDetail = createAsyncThunk("tasks/getOne", async (id) => {
  return await taskService.getTaskDetail(id);
});

export const createTask = createAsyncThunk("tasks/create", async (task) => {
  return await taskService.createTask(task);
});

export const updateTask = createAsyncThunk("tasks/update", async (task) => {
  return await taskService.updateTask(task);
});

export const deleteTask = createAsyncThunk("tasks/delete", async (id) => {
  return await taskService.deleteTask(id);
});

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTaskList.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(getTaskDetail.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, reminder: !task.reminder }
            : task
        );
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export const { reset } = taskSlice.actions;

export default taskSlice.reducer;
