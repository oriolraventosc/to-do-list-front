import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TaskStyled from "./TaskStyled";
import useTask from "../../hooks/useTask/useTask";
import { useState } from "react";

interface TasksProps {
  description: string;
  status: boolean;
  id: string;
}

const Task = (taskData: TasksProps): JSX.Element => {
  const { description, id } = taskData;
  const { deleteTask } = useTask();
  const [toDo, setDone] = useState(false);
  const handleOnChange = () => {
    setDone(!toDo);
  };
  return (
    <TaskStyled
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "primary.light",
      }}
      className="task"
    >
      <Typography
        sx={{
          fontSize: {
            xxl: "2.5rem",
            xl: "2rem",
            lg: "1.6rem",
            md: "1.6rem",
            sm: "1.5rem",
            xs: "1.5rem",
          },
          color: "primary.contrastText",
        }}
        className={toDo ? "task-done" : "task-not-done"}
        onClick={handleOnChange}
      >
        {description}
      </Typography>

      <CloseIcon
        onClick={() => deleteTask(id)}
        className="delete-icon"
        sx={{
          fontSize: {
            xxl: "2.5rem",
            xl: "2rem",
            lg: "1.6rem",
            md: "1.6rem",
            sm: "1.5rem",
            xs: "1.5rem",
          },
        }}
      />
    </TaskStyled>
  );
};

export default Task;
