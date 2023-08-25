import { Fragment, useContext } from "react";
import { OurCourseContext } from "../Context/OurCourseContext/OurCourseContext";
import "../OurCourses/OurCourse.css";

function OurCourses() {
  const { OurCourse } = useContext(OurCourseContext);

  return (
    <Fragment>
      <div>
        <div className="Course-Category Container">
          <h1>OUR COURSES</h1>
          <p>
            The best skills you'll find and Enhance your skills, get the job.
          </p>
        </div>
        <div className="course-Items">
          <div className="Courses-gridBox">
            {OurCourse.map((item) => (
              <div className="course-items">
                <div className="anim-img">
                  <img src={item.img} alt="/" />
                </div>
                <div className="OurcourseCaption">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button type="submit" className="takeCourse-btn">
                    TAKE A COURSE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default OurCourses;
