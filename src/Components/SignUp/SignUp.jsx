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

  // const [fieldValid, setFieldValid] = useState({
  //   fullName: "",
  //   email: "",
  //   password: "",
  //   confirm: "",
  // });
  // const [checkPassword, setCheckPassword] = useState();

  const [emailExists, setEmailExists] = useState(false);

  const [validation, setValidation] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setsignUpData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));

    // setFieldValid((prevFieldClasses) => ({
    //   ...prevFieldClasses,
    //   [name]: value.trim() === "" ? "input-red" : "input-green",
    // }));
  };

  useEffect(() => {
    console.log(signUpData);
  }, [signUpData]);

  const signUpHandler = async (event) => {
    event.preventDefault();

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

      // setSuccessMassage(true);
      // setTimeout(() => {
      //   setSuccessMassage(false);
      // }, 3000);

      // History.push("/Home");
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
              {/* {successMassage && (
                <div className="successMassage">
                  Your account has been created successfully
                </div>
              )} */}
              {emailExists && <div>Email is already registered.</div>}
            </div>
            <form>
              <label className="FullName">Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={changeHandler}
              />
              {/* {alertMessage && (
                <Fragment>
                  <span className="alertMassage">
                    <i class="fa-solid fa-circle-exclamation"></i> Enter the
                    Name
                  </span>
                </Fragment>
              )} */}
              <label className="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={changeHandler}
              />
              {/* {alertMessage && (
                <Fragment>
                  <span className="alertMassage">
                    <i class="fa-solid fa-circle-exclamation"></i> Enter the
                    email
                  </span>
                </Fragment>
              )} */}
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={changeHandler}
              />
              {/* {alertMessage && (
                <Fragment>
                  <span className="alertMassage">
                    <i class="fa-solid fa-circle-exclamation"></i> Enter the
                    password
                  </span>
                </Fragment>
              )} */}

              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={changeHandler}
              />
              {/* {alertMessage && (
                <Fragment>
                  <span className="alertMassage">
                    <i class="fa-solid fa-circle-exclamation"></i> Enter the
                    confirm password
                  </span>
                </Fragment>
              )} */}
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
