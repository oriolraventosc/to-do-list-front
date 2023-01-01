import { loadTasksActionCreator } from "../../redux/features/taskSlicer/taskSlicer";
import axios from "axios";
import { useAppDispatch } from "../../redux/hooks";
import { useCallback } from "react";
import { AddTask } from "../../types/types";
import {
  closeLoadingActionCreator,
  openLoadingActionCreator,
} from "../../redux/features/uiSlicer/uiSlicer";

const useTask = () => {
  const apiUrl = process.env.REACT_APP_URL;
  const dispatch = useAppDispatch();
  const loadAllTasks = useCallback(async () => {
    const url = `${apiUrl}/tasks/loadAllTasks`;
    try {
      dispatch(openLoadingActionCreator());
      const apiResponse = await axios.get(url);
      const { toDo } = apiResponse.data;
      dispatch(loadTasksActionCreator(toDo));
      dispatch(closeLoadingActionCreator());
    } catch {}
  }, [apiUrl, dispatch]);
  const addTask = async (taskData: AddTask) => {
    const url = `${apiUrl}/tasks/add`;
    try {
      dispatch(openLoadingActionCreator());
      await axios.post(url, taskData);

      loadAllTasks();
      dispatch(closeLoadingActionCreator());
    } catch {}
  };
  const deleteTask = async (id: string) => {
    const url = `${apiUrl}/tasks/delete/${id}`;
    try {
      dispatch(openLoadingActionCreator());
      await axios.delete(url);

      loadAllTasks();
      dispatch(closeLoadingActionCreator());
    } catch {}
  };
  return { loadAllTasks, addTask, deleteTask };
};

export default useTask;
