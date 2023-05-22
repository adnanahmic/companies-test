import { Grid } from "@mui/material";
import theme from "../theme";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item>
        <Header />
      </Grid>
      <Grid
        item
        sx={{
          pt: theme.spacing(14),
          px: theme.spacing(6),
          pb: theme.spacing(1),
          width: "100%",
          height: "100%",
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Layout;
