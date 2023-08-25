import { Fragment } from "react";
import salogo from "./salogo.png";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="navContainer">
          <div className="navLogo">
            <img src={salogo} alt="logo" />
          </div>
          <div className="navMenu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Courses">Courses</Link>
              </li>
              <li>
                <Link to="/Pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/">About us</Link>
              </li>

              <li>
                <Link to="/Login" className="login btn">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </Fragment>
  );
}
export default Navigation;
