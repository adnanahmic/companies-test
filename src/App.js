import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import { useGoogleLogin } from "react-use-googlelogin";
import { createContext } from "react";

export const GoogleAuthContext = createContext();

export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    persist: true
  });

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  );
};

const App = () => {
  return (
    <GoogleAuthProvider>
      <RouterProvider router={router} />;
    </GoogleAuthProvider>
  );
};

export default App;
