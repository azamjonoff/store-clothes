// rrd
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// layout
import MainLayout from "./layouts/MainLayout";

// pages
import { Home, About, Login } from "./pages";

// redux
import { useDispatch, useSelector } from "react-redux";

// components
import ProtectedRoutes from "./components/ProtectedRoutes";

// features
import { isAuthChange } from "./features/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { isAuthReady } = useSelector((state) => state.user);
  const routes = createBrowserRouter([
    {
      element: (
        <ProtectedRoutes isAuthReady={isAuthReady}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/login",
      element: isAuthReady ? <Navigate to="/" /> : <Login />,
    },
  ]);

  useEffect(() => {
    dispatch(isAuthChange());
  }, []);

  return <>{isAuthChange && <RouterProvider router={routes} />}</>;
}

export default App;
