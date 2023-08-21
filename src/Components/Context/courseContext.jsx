import { createContext, useState } from "react";
export const CourseContext = createContext({
  course: null,
  setCourse: null,
});

export const CourseProvider = ({ children }) => {
  const [course, setCourse] = useState([
    {
      courseId: "1",
      img: "fa-solid fa-laptop",
      name: "Basics of Computer",
      description:
        "Learn how to meet Office needs, How to manage documentations, and design the work flow as well.",
    },

    {
      courseId: "2",
      img: "fa-solid fa-pen-ruler",
      name: "Graphic Designing",
      description:
        "Learn the basic sense of designing, enhance your creativity and Read the concept convert into graphics.",
    },

    {
      courseId: "3",
      img: "fa-solid fa-sack-dollar",
      name: "Freelancing",
      description:
        "Earn money using skills at comfort home. Become a successful freelancer. Earn from Home",
    },

    {
      courseId: "4",
      img: "fa-solid fa-code",
      name: "Web Designing",
      description:
        "Learn how to meet Office needs, How to manage documentations, and design the work flow as well.",
    },

    {
      courseId: "5",
      img: "fa-solid fa-code",
      name: "Web Development",
      description:
        "Learn how to meet Office needs, How to manage documentations, and design the work flow as well.",
    },

    {
      courseId: "6",
      img: "fa-solid fa-mobile-screen-button",
      name: "Mobile App Development",
      description:
        "Learn how to meet Office needs, How to manage documentations, and design the work flow as well.",
    },
  ]);

  return (
    <CourseContext.Provider value={{ course, setCourse }}>
      {children}
    </CourseContext.Provider>
  );
};
