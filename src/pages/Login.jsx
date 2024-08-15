// actions
import { isAuthChange } from "../features/userSlice";

// redux
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  return (
    <div className="h-screen grid place-items-center">
      <div>
        <h1 className="text-3xl">
          Click the <span className="font-bold">login</span> button below to
          access the site.
        </h1>
        <button
          onClick={() => dispatch(isAuthChange(true))}
          className="btn btn-primary"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
