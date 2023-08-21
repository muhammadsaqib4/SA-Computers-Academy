import { Fragment } from "react";
import getStartd from "./getStartd.gif";
import "./Home.css";

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
          <div>
            <img src={getStartd} alt="/" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Home;
