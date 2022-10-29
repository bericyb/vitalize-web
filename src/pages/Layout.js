import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul style={{ display: "flex", listStyleType: "none" }}>
          <li>
            <Link style={{ color: "white", padding: "20px" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ color: "white", padding: "20px" }} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link style={{ color: "white", padding: "20px" }} to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
