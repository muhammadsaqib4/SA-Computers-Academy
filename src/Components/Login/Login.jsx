import { Fragment, useEffect, useState } from "react";
import "./Login.css";
import salogo from "../Navigation/salogo.png";
import login from "./login.gif";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  SignInForm,
} from "../Firebase/FirebaseUtility";
import { Link } from "react-router-dom";

function Login() {
  // const history = useHistory();
  const googleSign = async () => {
    const { user } = await signInWithGooglePopup();
    const response = await createUserDocumentFromAuth(user);
    console.log("response:", response);

    if (user.success) {
      setSuccessMassage(true);

      setTimeout(() => {
        setSuccessMassage(false);
      }, 3000);

      // history.push("/Home");
    } else {
      console.error("Sign in Error:", user.error);
    }
  };

  //---------------Change Handler----------------

  const [userData, setUserData] = useState({});
  const [successMassage, setSuccessMassage] = useState(false);

  const [validation, setValidation] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const signInHandler = async (event) => {
    event.preventDefault();

    if (!userData.email || !userData.password) {
      // Check if email and password are empty
      setValidation(true);

      return false;
    }

    let signInData = await SignInForm(userData.email, userData.password);

    if (signInData) {
      const response = await createUserDocumentFromAuth(signInData);
      console.log("Response", response);

      // console.log("User Signin:", setSuccessMassage);
      setSuccessMassage(true);
      setTimeout(() => {
        setSuccessMassage(false);
      }, 3000);

      // history.push("/Home");
    } else {
      // Handle sign-in error
      setValidation(false);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="Container flex">
          <img src={login} className="loginAnimation" alt="/" />
          <div className="SignIn">
            <img src={salogo} className="salogo" alt="/" />
            <div className="messageContainer">
              {successMassage && (
                <div className="successMassage">Sign-in Successfully</div>
              )}
            </div>
            <h1>Sign in</h1>
            <h3>I already have an account</h3>
            <span>
              <button type="submit" id="btn-google" onClick={googleSign}>
                <i className="fab fa-google "></i> Continue with GOOGLE
              </button>
            </span>

            <form action="">
              <label className="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={changeHandler}
                className={validation && !userData.email ? "input-error" : ""}
                required // This makes the field required
              />
              {validation && !userData.email && (
                <span className="validation">
                  <i class="fa-solid fa-circle-exclamation"></i> Email is must
                  be required
                </span>
              )}
              <label id="passwordfield">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={changeHandler}
                className={
                  validation && !userData.password ? "input-error" : ""
                }
                required
              />
              {validation && !userData.password && (
                <span className="validation">
                  <i class="fa-solid fa-circle-exclamation"></i> Password is
                  must be required
                </span>
              )}

              <div className="buttonFlex">
                <span>
                  <button type="submit" id="btn-signin" onClick={signInHandler}>
                    SIGN IN
                  </button>
                  <span>
                    <br />
                    <span>If you haven't an account</span>
                    <Link to="/SignUp" style={{ color: "#225ecc" }}>
                      {" "}
                      Sign Up
                    </Link>
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
