import { Container } from "@mui/material";
import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.light",
        height: "100vh",
        width: "100vw",
        zIndex: 8,
      }}
    >
      <LoadingStyled className="loader"></LoadingStyled>
    </Container>
  );
};

export default Loading;
