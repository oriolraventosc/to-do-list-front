import { Container, styled } from "@mui/material";

const AddInputStyled = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  .input {
    border-radius: 5px 0 0 5px;
    background-color: #dadad9;
  }
  .button {
    background-color: #dadad9;
    color: #f06449;
    border: none;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 0 5px 5px 0;
    margin-top: -0.5rem;
  }
  .button:hover {
    background-color: #f06449;
    border: none;
    color: #36382e;
    transition: 0.2s;
  }
  fieldset {
    border-radius: 5px 0 0 5px;
  }
`;

export default AddInputStyled;
