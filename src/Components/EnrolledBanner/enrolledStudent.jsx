import { Fragment, useState } from "react";
import "./enroll.css";
import { CountUp } from "react";
import { useCountUp } from "react-countup";

function EnrolledBanner() {
  const [userInfo, setUserInfo] = useState([
    {
      id: "1",
      img: "fa-solid fa-user-tie",
      counter: "2500+",
      name: "Students Enrolled",
    },

    {
      id: "2",
      img: "fa-solid fa-calendar-check",
      counter: "4000+",
      name: "Classes Complete",
    },

    {
      id: "3",
      img: "fa-solid fa-graduation-cap",
      counter: "2500+",
      name: "Certified Students",
    },

    {
      id: "4",
      img: "fa-solid fa-user-graduate",
      counter: "50+",
      name: "Industry Expert Instructors",
    },
  ]);

  const Counter = () => {
    useCountUp({ ref: "counter", end: 1234567 });
    return <span id="counter" />;
  };

  return (
    <Fragment>
      <div className="Items">
        {userInfo.map((data) => (
          <div className="img-icon">
            <i class={data.img}></i>
            <CountUp duration={15} className="counter" end={data.counter} />
            <h1>{data.counter}</h1>
            <p>{data.name}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default EnrolledBanner;
