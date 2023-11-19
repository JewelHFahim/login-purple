import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import SignIn from "../pages/signin/SignIn";
import Signup from "../pages/signup/signup";
import Forgetpass from "../pages/forgetpass/forgetpass";
import Resetpass from "../pages/resetpass/resetpass";
import Verifymail from "../pages/verifymail/verifymail";
import Placecode from "../pages/placecode/placecode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forget-pass",
        element: <Forgetpass />,
      },
      {
        path: "/reset-pass",
        element: <Resetpass />,
      },
      {
        path: "/verify-mail",
        element: <Verifymail />,
      },
      {
        path: "/place-code",
        element: <Placecode />,
      },
    ],
  },
]);

export default router;
