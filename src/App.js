import "./App.css";
import { Fragment } from "react";
import Navigation from "./Components/Navigation/Header";
import Home from "./Components/Home/Home.jsx";

import OurCourses from "./Components/OurCourses/OurCourse";
import Pricing from "./Components/Pricing/pricing";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}></Route>
          {/* <Route path="/" element={<Courses />} />
          <Route path="/" element={<EnrolledBanner />} />
          <Route path="/" element={<OurCourses />} />
          <Route path="/" element={<Pricing />} />
          <Route path="/" element={<Footer />} /> */}
          <Route path="/Courses" element={<OurCourses />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
