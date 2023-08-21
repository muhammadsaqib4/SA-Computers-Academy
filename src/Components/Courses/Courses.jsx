import { Fragment, useContext } from "react";
import { CourseContext } from "../Context/courseContext";
import "../Courses/Course.css";

function Courses() {
  const { course, setCourse } = useContext(CourseContext);
  console.log(course);

  return (
    <Fragment>
      <div>
        <div className="Course-Category Container">
          <h1>COURSE CATEGORY</h1>
          <p>
            The best skills you'll find and Enhance your skills, get the job.
          </p>
          <div className="course-Items">
            <div className="gridBox">
              {course.map((item) => (
                <div className="icon-img">
                  <i className={item.img}></i>
                  <div className="courseCaption">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Courses;
