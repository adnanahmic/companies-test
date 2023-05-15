import { Button, Grid } from "@mui/material";
import { useContext } from "react";
import { logout } from "../store/slices/auth.slice";
import { GoogleAuthContext } from "../App";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const { signOut } = useContext(GoogleAuthContext);

  const handleSignOut = () => {
    signOut();
    dispatch(logout());
  };

  return (
    <Grid container>
      Homepage
      <Button onClick={handleSignOut}>Signout</Button>
    </Grid>
  );
};

export default HomePage;
