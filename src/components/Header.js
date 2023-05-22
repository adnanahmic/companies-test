import { AppBar, Grid, Typography } from "@mui/material";
import theme from "../theme";
import { Logout } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GoogleAuthContext } from "../App";
import { useGetMeQuery } from "../Api";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const { signOut } = useContext(GoogleAuthContext);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  useGetMeQuery({}, { refetchOnMountOrArgChange: true, skip: !isLoggedIn });

  return (
    <AppBar
      position="fixed"
      sx={{
        px: theme.spacing(3),
        py: theme.spacing(2),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h6" onClick={() => navigate("/dashboard")}>
        Companies
      </Typography>
      <Grid
        container
        justifyContent="flex-end"
        alignItems="center"
        columnSpacing={3}
      >
        <Grid item>
          <Link
            to="drag-drop"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Drag & Drop
          </Link>
        </Grid>
        <Grid item>
          <Link
            to="expand-example"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Expand Examples
          </Link>
        </Grid>
        <Grid item>
          <Logout onClick={handleSignOut} />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
