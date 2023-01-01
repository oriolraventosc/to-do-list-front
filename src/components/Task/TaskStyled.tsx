import { Container, styled } from "@mui/material";

const TaskStyled = styled(Container)`
  width: calc(100vw - 4rem);
  @media (min-width: 426px) {
    width: calc(100vw - 10rem);
  }
  @media (min-width: 768px) {
    width: calc(100vw - 25rem);
  }
  @media (min-width: 1024px) {
    width: calc(100vw - 35rem);
  }
  @media (min-width: 1440px) {
    width: calc(100vw - 55rem);
  }
  @media (min-width: 2000px) {
    width: calc(80vw);
  }
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 1rem;
  .delete-icon:hover {
    color: #f06449;
    transition: 0.2s;
    cursor: pointer;
  }
  .task-done {
    text-decoration: line-through;
  }
  .task-not-done {
    text-decoration: none;
  }
`;

export default TaskStyled;
