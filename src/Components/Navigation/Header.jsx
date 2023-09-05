import { Fragment, useContext } from "react";
import salogo from "../Assests/salogo.png";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../Context/UserContext/LoginContext";
import { auth } from "../Firebase/FirebaseUtility";

function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Sign out the user in Firebase
      setCurrentUser(null); // Update the user state in your application
      console.log("User:", currentUser);
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };
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
              {currentUser === null ? (
                <li>
                  <Link className="login btn" onClick={handleSignOut}>
                    Sign Out
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/Login" className="login btn">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </Fragment>
  );
}
export default Navigation;
