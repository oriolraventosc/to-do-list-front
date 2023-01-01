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
        mb: "1rem",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "primary.main",
          fontSize: {
            xxl: "4rem",
            xl: "4rem",
            lg: "3rem",
            md: "2.1rem",
            sm: "2.5rem",
            xs: "2.5rem",
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
