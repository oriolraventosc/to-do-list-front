import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { taskReducer } from "./features/taskSlicer/taskSlicer";
import { uiReducer } from "./features/uiSlicer/uiSlicer";

export const store = configureStore({
  reducer: {
    tasksActions: taskReducer,
    uiActions: uiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
