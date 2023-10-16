import { Fragment, useState, useEffect } from "react";
import "./SignUp.css";
import salogo from "../Navigation/salogo.png";
import joinus from "./joinus.gif";
import { Link } from "react-router-dom";
import {
  SignUpForm,
  createUserDocumentFromAuth,
  checkEmailExists,
} from "../Firebase/FirebaseUtility";

function SignUp() {
  const [signUpData, setsignUpData] = useState({});
  const [successMassage, setSuccessMassage] = useState(false);

  const [emailExists, setEmailExists] = useState(false);

  const [validation, setValidation] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setsignUpData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(signUpData);
  }, [signUpData]);

  const signUpHandler = async (event) => {
    event.preventDefault();

    if (
      !signUpData.fullName ||
      !signUpData.email ||
      !signUpData.password ||
      !signUpData.confirmPassword
    ) {
      // Check if email and password are empty
      setValidation(true);

      return false;
    }
    const data = await SignUpForm(signUpData.email, signUpData.password);

    console.log("Registerd", data);
    const checkEmail = await checkEmailExists(data);

    if (checkEmail) {
      setEmailExists(true);
    } else {
      // Email is not registered, you can proceed with registration
      setEmailExists(false);
    }
    if (data) {
      const response = await createUserDocumentFromAuth(
        data.user,
        signUpData.fullName
      );
      console.log("Response", response);

      setSuccessMassage(true);
      setTimeout(() => {
        setSuccessMassage(false);
      }, 3000);

      History.push("/Home");
    } else {
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="Container flex">
          <img src={joinus} className="loginAnimation" alt="/" />
          <div className="SignIn">
            <img src={salogo} className="salogo" alt="/" />

            <h1>Sign up</h1>
            <h3>Are you not have an account</h3>
            <div className="messageContainer">
              {successMassage && (
                <div className="successMassage">
                  Your account has been created successfully
                </div>
              )}
              {emailExists && <div>Email is already registered.</div>}
            </div>
            <form>
              <label className="FullName">Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={changeHandler}
                className={
                  validation && !signUpData.fullName ? "input-error" : ""
                }
              />
              {validation && !signUpData.fullName && (
                <span className="validation">
                  <i class="fa-solid fa-circle-exclamation"></i> Email is must
                  be required
                </span>
              )}
              <label className="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={changeHandler}
                className={validation && !signUpData.email ? "input-error" : ""}
              />
              {validation && !signUpData.email && (
                <span className="validation">
                  <i class="fa-solid fa-circle-exclamation"></i> Email is must
                  be required
                </span>
              )}
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={changeHandler}
                className={
                  validation && !signUpData.password ? "input-error" : ""
                }
              />
              {validation && !signUpData.password && (
                <span className="validation">
                  <i class="fa-solid fa-circle-exclamation"></i> Email is must
                  be required
                </span>
              )}

              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={changeHandler}
                className={
                  validation && !signUpData.confirmPassword ? "input-error" : ""
                }
              />
              {validation && !signUpData.confirmPassword && (
                <span className="validation">
                  <i class="fa-solid fa-circle-exclamation"></i> Email is must
                  be required
                </span>
              )}
            </form>

            <div className="buttonFlex">
              <span>
                <button type="submit" id="btn-signin" onClick={signUpHandler}>
                  SIGN UP
                </button>
              </span>
              <br />
              <span>If you have an account</span>
              <Link to="/Login" style={{ color: "#225ecc" }}>
                {" "}
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SignUp;
