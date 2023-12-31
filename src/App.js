import "./App.css";
import { Fragment } from "react";
import Navigation from "./Components/Navigation/Header";
import Home from "./Components/Home/Home.jsx";

import OurCourses from "./Components/OurCourses/OurCourse";
import Pricing from "./Components/Pricing/pricing";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
// import { Switch, Redirect } from "browser-router";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          {/* <Redirect from="/" to="/home" /> */}

          <Route path="/Courses" element={<OurCourses />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
