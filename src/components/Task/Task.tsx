import { Typography } from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
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
    >
      <Typography
        sx={{
          fontSize: {
            lg: 25,
            md: 22,
            sm: 22,
            xs: 22,
          },
          color: "primary.contrastText",
        }}
        className={toDo ? "task-done" : "task-not-done"}
        onClick={handleOnChange}
      >
        {description}
      </Typography>

      <DeleteForeverRoundedIcon
        onClick={() => deleteTask(id)}
        className="delete-icon"
      />
    </TaskStyled>
  );
};

export default Task;
