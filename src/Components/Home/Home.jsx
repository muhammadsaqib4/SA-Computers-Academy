import { Fragment } from "react";
import home from "./home.gif";
import "./Home.css";
import EnrolledBanner from "../EnrolledBanner/enrolledStudent";
import Footer from "../Footer/Footer";
import Courses from "../Courses/Courses";
import OurCourses from "../OurCourses/OurCourse";
import Pricing from "../Pricing/pricing";

function Home() {
  return (
    <Fragment>
      <div className="Container">
        <div className="slide-animation">
          <div className="first-Content">
            <h1>
              Learn <strong style={{ color: "#225ecc" }}>Skills</strong> to
              Achieve
              <br />
              <strong style={{ color: "#225ecc" }}>Success</strong> with Hands
              on <br /> Experience
            </h1>
            <p>
              Unlocking Futures through Technical Skills from{" "}
              <strong style={{ color: "#225ecc" }}>
                <br />
                SA Computers Academy
              </strong>{" "}
              Learn skills with hands on <br /> experience
            </p>

            <button type="submit" className="getStarted btn">
              Get Started
            </button>
          </div>
          <div className="gif-animation">
            <img src={home} alt="/" />
          </div>
        </div>
      </div>

      <Courses />
      <EnrolledBanner />
      <OurCourses />
      <Pricing />
    </Fragment>
  );
}
export default Home;
