import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import useTask from "../../hooks/useTask/useTask";
import AddInputStyled from "./AddInputStyled";

const AddInput = (): JSX.Element => {
  const { addTask } = useTask();
  let intialFormData = {
    description: "",
  };
  const [initialForm, setData] = useState(intialFormData);
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...initialForm,
      description: event.target.value,
    });
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formDataToSubmit = {
      description: initialForm.description,
    };
    if (formDataToSubmit.description !== "") {
      await addTask(formDataToSubmit);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <AddInputStyled sx={{ pl: 0, pr: 0 }} disableGutters maxWidth={false}>
        <TextField
          type="text"
          autoComplete="off"
          placeholder="task description"
          inputProps={{ style: { fontSize: 20 } }}
          sx={{
            borderRadius: "5px 0 0 5px",
            border: "none",
            mt: "2rem",
            mb: "2.5rem",
          }}
          size="medium"
          className="input"
          onChange={handleFormChange}
        ></TextField>
        <Button
          type="submit"
          className="button"
          size="medium"
          sx={{ fontSize: 15 }}
        >
          Add
        </Button>
      </AddInputStyled>
    </form>
  );
};

export default AddInput;
