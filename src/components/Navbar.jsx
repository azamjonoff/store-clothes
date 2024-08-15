// rrd
import { Link } from "react-router-dom";

// actions
import { isAuthChange } from "../features/userSlice";

// redux
import { useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <header className="bg-base-200 py-2">
      <div className="flex items-center justify-between container">
        <Link to="/" className="btn btn-ghost">
          Store
        </Link>
        <nav>
          <ul className="flex items-center">
            <li>
              <Link className="btn btn-ghost" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost" to="/about">
                About
              </Link>
            </li>
            {/* <li>
              <button
                className="btn btn-warning"
                onClick={() => dispatch(isAuthChange(false))}
              >
                LogOut
              </button>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
