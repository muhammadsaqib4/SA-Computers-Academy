import "./App.css";
import { Fragment } from "react";
import Navigation from "./Components/Navigation/Header";
import Home from "./Components/Home/Home.jsx";
import Courses from "./Components/Courses/Courses";
import EnrolledBanner from "./Components/EnrolledBanner/enrolledStudent";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Home />
      <Courses />
      <EnrolledBanner />
    </Fragment>
  );
}

export default App;
