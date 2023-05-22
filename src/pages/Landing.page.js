import { CircularProgress, Grid, Paper } from "@mui/material";
import theme from "../theme";
import { useContext, useEffect } from "react";
import { GoogleAuthContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { logout, setData } from "../store/slices/auth.slice";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { googleUser, isSignedIn, isInitialized } =
    useContext(GoogleAuthContext);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const isLoading = !(isInitialized && isSignedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (isInitialized) {
      if (googleUser && isSignedIn) {
        dispatch(
          setData({
            isLoggedIn: true,
            user: googleUser.profileObj,
            token: googleUser.tokenId,
          })
        );
      } else {
        dispatch(logout());
        navigate("/login");
      }
    }
  }, [
    isInitialized,
    googleUser,
    isSignedIn,
    pathname,
    dispatch,
    navigate,
    isLoggedIn,
  ]);

  return isLoading ? (
    <Grid container sx={{ py: "10%", px: "30%", height: "100vh" }}>
      <Paper
        elevation={2}
        sx={{
          p: theme.spacing(3),
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress size={80} />
      </Paper>
    </Grid>
  ) : (
    <Outlet />
  );
};

export default LandingPage;
