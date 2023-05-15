import { Button, Grid, Paper, Typography } from "@mui/material";
import theme from "../theme";
import { useContext, useEffect } from "react";
import { GoogleAuthContext } from "../App";
import { useDispatch } from "react-redux";
import { setData } from "../store/slices/auth.slice";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signIn, googleUser, isSignedIn, isInitialized } =
    useContext(GoogleAuthContext);

  useEffect(() => {
    if (googleUser && isSignedIn) {
      dispatch(
        setData({
          isLoggedIn: true,
          user: googleUser.profileObj,
          token: googleUser.tokenId,
        })
      );
      navigate("/home");
      // axios
      //   .get(`${process.env.REACT_APP_API_URL}/me`, {
      //     headers: {
      //       Authorization: `Bearer ${googleUser.tokenId}`,
      //     },
      //   })
      //   .then(console.log);
      // axios
      //   .get(`${process.env.REACT_APP_API_URL}/companies`, {
      //     headers: {
      //       Authorization: `Bearer ${googleUser.tokenId}`,
      //     },
      //   })
      //   .then(console.log);
    }
  }, [googleUser, isSignedIn, dispatch, navigate]);

  return (
    <Grid container sx={{ py: "10%", px: "30%" }}>
      <Paper elevation={2} sx={{ p: theme.spacing(3) }}>
        <Typography variant="h4">
          Ovo je aplikacija za menadzment kompanija, molim vas ulogujte se preko
          googla
        </Typography>
        <Button onClick={signIn}>Login with Google</Button>
      </Paper>
    </Grid>
  );
};

export default LandingPage;
