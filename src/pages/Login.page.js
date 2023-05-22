import { Button, Grid, Paper, Typography } from "@mui/material";
import theme from "../theme";
import { useContext } from "react";
import { GoogleAuthContext } from "../App";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(GoogleAuthContext);

  const handleSignin = async () => {
    await signIn();
    navigate("/");
  };

  return (
    <Grid container sx={{ py: "10%", px: "30%", height: "100vh" }}>
      <Paper
        elevation={2}
        sx={{
          p: theme.spacing(3),
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">
          Ovo je aplikacija za menadzment kompanija, molim vas ulogujte se preko
          googla
        </Typography>
        <Button variant="contained" onClick={handleSignin}>
          Login with Google
        </Button>
      </Paper>
    </Grid>
  );
};

export default LoginPage;
