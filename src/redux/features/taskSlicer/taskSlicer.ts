import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskStructure } from "../../../types/types";

interface TaskState {
  toDo: TaskStructure[];
}

const TaskInitialState: TaskState = {
  toDo: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState: TaskInitialState,
  reducers: {
    loadTasks: (initialState, action: PayloadAction<TaskStructure[]>) => ({
      ...initialState,
      toDo: [...action.payload],
    }),
    deleteTask: (initialState, action: PayloadAction<string>) => ({
      ...initialState,
      toDo: [...initialState.toDo.filter((task) => task.id !== action.payload)],
    }),
  },
});

export const taskReducer = taskSlice.reducer;

export const {
  loadTasks: loadTasksActionCreator,
  deleteTask: deleteTaskActionCreator,
} = taskSlice.actions;
