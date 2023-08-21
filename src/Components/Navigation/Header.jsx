import { Fragment } from "react";
import salogo from "./salogo.png";
import "./Header.css";

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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Courses</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">About us</a>
              </li>

              <li>
                <a href="/" className="login btn">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
export default Navigation;
