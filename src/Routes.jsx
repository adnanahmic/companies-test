import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/Landing.page";
import HomePage from "./pages/Home.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

export default router;
