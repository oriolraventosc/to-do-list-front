import { Container, Typography } from "@mui/material";

const Header = (): JSX.Element => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: "1rem",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "primary.main",
          fontSize: {
            lg: 45,
            md: 45,
            sm: 45,
            xs: 40,
          },
          fontWeight: "bold",
        }}
      >
        To Do List
      </Typography>
    </Container>
  );
};

export default Header;
