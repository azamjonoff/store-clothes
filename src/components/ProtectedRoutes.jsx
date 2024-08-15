// rrd
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ isAuthReady, children }) {
  if (isAuthReady) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoutes;
