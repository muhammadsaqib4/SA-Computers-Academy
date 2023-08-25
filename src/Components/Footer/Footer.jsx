import { Fragment, useState } from "react";
import "./Footer.css";
import { Outlet } from "react-router-dom";
function Footer() {
  const [footerItem] = useState([
    {
      title: "LEARNING",
      list1: "Course",
      list2: "Blog",
      list3: "Contact",
      list4: "Terms",
      list5: "Meetups",
    },

    {
      title: "LEARN & GROW",
      list1: "Blog",
      list2: "Privacy",
      list3: "Handbook",
      list4: "Help Desk",
    },

    {
      title: "ENGAGE US",
      list1: "Marketing",
      list2: "Visual Assistant",
      list3: "System Analysis",
      list4p: "Advertise",
    },

    {
      title: "LEGAL",
      list1: "Find Designers",
      list2: "Find Developers",
      list3: "Advertise",
      list4p: "Teams",
    },
  ]);
  return (
    <Fragment>
      <div className="Footer-Container">
        <div className="Intro">
          <h3>WHY YOU CHOOSE US</h3>
          <p>
            SA Computers Academy has been a great place to learn and grow in the
            field of technology since 1992. It offers high-quality education and
            training, knowledgeable instructors, and hands-on experience that
            will help you achieve your goals and succeed in your career.
            <br />
            SA Computers Academy offers a wide range of courses from beginner to
            advanced, and provides hands-on training that is essential for
            success in the tech industry.
          </p>
        </div>
        <div className="footer-Items">
          {footerItem.map((item) => (
            <div>
              <div className="each-item">
                <h5>{item.title}</h5>
                <ul>
                  <li>
                    <a href="/">{item.list1}</a>
                  </li>
                  <li>
                    <a href="/">{item.list2}</a>
                  </li>
                  <li>
                    <a href="/">{item.list3}</a>
                  </li>
                  <li>
                    <a href="/">{item.list4}</a>
                  </li>
                  <li>
                    <a href="/">{item.list5}</a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                src="https://maps.google.com/maps?q=SA%20Computers%20Academy%20Jinnah%20Road&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                id="gmap_canvas"
                frameborder="0"
                scrolling="no"
                style={{ width: "600px", height: "400px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Footer;
