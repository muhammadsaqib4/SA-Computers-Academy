import { Fragment } from "react";
import "./Login.css";
import { useState, useEffect } from "react";
import salogo from "../Navigation/salogo.png";
// import { Formik, Form, Field, ErrorMessage } from "formik";

function Login() {
  //   const [userData, setUserData] = useState({});

  //   const changeHandler = (e) => {
  //     const { name, value } = e.target;
  //     setUserData((prevUserData) => ({
  //       ...prevUserData,
  //       [name]: value,
  //     }));
  //   };
  //   useEffect(() => {
  //     console.log(userData);
  //   }, [userData]);

  return (
    <Fragment>
      <div className="container">
        <div className="Container flex">
          <div className="SignIn">
            <img src={salogo} className="salogo" alt="/" />
            <h1>SignIn</h1>
            <h3>I already have an account</h3>
            <p>Sign in with your email and password</p>

            <form>
              <label className="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                // onChange={changeHandler}
              />
              <label>Password</label>
              <input
                type="text"
                name="password"
                placeholder="Password"
                // onChange={changeHandler}
              />
            </form>

            <div className="buttonFlex">
              <span>
                <button type="submit" id="btn-signin">
                  SIGN IN
                </button>
              </span>
              <span>
                <button type="submit" id="btn-google">
                  GOOGLE SIGN IN
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
