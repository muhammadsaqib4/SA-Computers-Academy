import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CourseProvider } from "./Components/Context/courseContext";
import { OurCourseProvider } from "./Components/Context/OurCourseContext/OurCourseContext";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Components/Context/UserContext/LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CourseProvider>
          <OurCourseProvider>
            <App />
          </OurCourseProvider>
        </CourseProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
