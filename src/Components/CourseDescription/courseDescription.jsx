import { Fragment, useContext } from "react";
import { OurCourseContext } from "../Context/OurCourseContext/OurCourseContext";

function CourseDescription() {
  const { OurCourse } = useContext(OurCourseContext);
  return (
    <Fragment>
      <div className="Description-Container">
        <div>
          <h1>{OurCourse.name}</h1>
          <p>{OurCourse.description}</p>
          <img src={OurCourse.instructorImg} alt="/" />
          <span>
            <p>Instructor: {OurCourse.instructor}</p>
          </span>
          <button>Enrolled Now</button>
        </div>
      </div>
    </Fragment>
  );
}
export default CourseDescription;
