import { createContext, useState } from "react";
import basics from "./basics.jpg";
import graphic from "./graphic.gif";
import web from "./web.gif";
import freelance from "./freelance.gif";

export const OurCourseContext = createContext({
  OurCourse: null,
  setOurCourse: null,
});

export const OurCourseProvider = ({ children }) => {
  const [OurCourse, setOurCourse] = useState([
    {
      courseId: "1",
      img: basics,
      name: "Basics of Computer",
      description:
        "Learn how to meet Office needs, How to manage documentations, and design the work flow as well.",
       instructorImg: "",
      instructor: "Muhammad Saqib",
      reviews: "4.7",
      duration: "3 months",
      certificate: "",
      classTime: "1 hour",
    },

    {
      courseId: "2",
      img: graphic,
      name: "Graphic Designing",
      description:
        "Learn the basic sense of designing, enhance your creativity and Read the concept convert into graphics.",
      reviews: "4.7",
      duration: "3 months",
      certificate: "",
      classTime: "1 hour",
    },

    {
      courseId: "3",
      img: freelance,
      name: "Freelancing",
      description:
        "Earn money using skills at comfort home. Become a successful freelancer. Earn from Home",
      reviews: "4.7",
      duration: "2 months",
      certificate: "",
      classTime: "2 hour",
    },

    {
      courseId: "4",
      img: web,
      name: "Web Designing",
      description:
        "Learn how to meet Office needs, How to manage documentations, and design the work flow as well.",
      reviews: "4.7",
      duration: "3 months",
      certificate: "",
      classTime: "2 hours",
    },

    {
      courseId: "5",
      img: web,
      name: "Web Development",
      description:
        "Learn how to meet Office needs, How to manage documentations, and design the work flow as well.",
      reviews: "4.7",
      duration: "3 months",
      certificate: "",
      classTime: "2 hours",
    },

    {
      courseId: "6",
      img: basics,
      name: "Mobile App Development",
      description:
        "Learn how to meet Office needs, How to manage documentations, and design the work flow as well.",
      reviews: "4.7",
      duration: "3 months",
      certificate: "",
      classTime: "2 hours",
    },
  ]);

  return (
    <OurCourseContext.Provider value={{ OurCourse, setOurCourse }}>
      {children}
    </OurCourseContext.Provider>
  );
};
