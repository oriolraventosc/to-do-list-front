import React, { useEffect } from "react";
import useTask from "../../hooks/useTask/useTask";
import { useAppSelector } from "../../redux/hooks";
import AddInput from "../AddInput/AddInput";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import Task from "../Task/Task";
import "./App.css";
function App() {
  const { loadAllTasks } = useTask();
  const loading = useAppSelector((uiActions) => uiActions.uiActions.loading);
  useEffect(() => {
    loadAllTasks();
  }, [loadAllTasks]);
  const tasksData = useAppSelector(
    (tasksActions) => tasksActions.tasksActions.toDo
  );
  return (
    <>
      {loading && <Loading />};
      <div className="App">
        <Header />
        {tasksData.map((task, index) => (
          <Task
            description={task.description}
            status={task.status}
            key={index}
            id={task.id}
          />
        ))}
        <AddInput />
      </div>
    </>
  );
}

export default App;
