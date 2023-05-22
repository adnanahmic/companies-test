import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/Landing.page";
import HomePage from "./pages/Home.page";
import LoginPage from "./pages/Login.page";
import Layout from "./components/Layout";
import DragDropPage from "./pages/DragDrop.page";
import ExpandExamplePage from "./pages/ExpandExample.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        path: "dashboard",
        element: <Layout />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "drag-drop",
            element: <DragDropPage />,
          },
          {
            path: "expand-example",
            element: <ExpandExamplePage />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
