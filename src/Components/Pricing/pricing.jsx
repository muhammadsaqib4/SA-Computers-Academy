import { Fragment, useState } from "react";
import "./pricing.css";

function Pricing() {
  const [price] = useState([
    {
      id: 1,
      package: "Normal",
      price: "7,000",
      Duration: "3 months",
      classTime: "2 hours",
      limit: "Limited Course",
      support: "Instructor Support",
      source: "No source Files",
      certificate: "Certificate",
    },

    {
      id: 1,
      package: "Standard",
      price: "9,000",
      Duration: "3 months",
      classTime: "2 hours",
      limit: "Limited Course",
      support: "Instructor Support",
      source: "No source Files",
      certificate: "Certificate",
    },

    {
      id: 1,
      package: "Premium",
      price: "15,000",
      Duration: "6 months",
      classTime: "2 hours",
      limit: "Limited Course",
      support: "Instructor Support",
      source: "No source Files",
      certificate: "Certificate",
    },
  ]);
  return (
    <Fragment>
      <div className="Course-Category Container">
        <h1>PLAN & PRICING</h1>
        <p>The best skills you'll find and Enhance your skills, get the job.</p>
      </div>

      <div className="Pricing-Container">
        {price.map((item) => (
          <div className="Each-Price-Container">
            <div className="price-Caption">
              <h2>{item.package}</h2>
              <div className="Rs-Caption">
                <span id="Rupees">Rs.</span>
                <h1>{item.price}</h1>
                <span id="month">/month</span>
              </div>
              <ul className="price-list">
                <li>{item.Duration}</li>
                <li>{item.classTime}</li>
                <li>{item.limit}</li>
                <li>{item.support}</li>
                <li>{item.source}</li>
                <li>
                  {item.certificate}
                  <i class="  fa fa-certificate "></i>
                </li>
              </ul>
              <button type="submit" className="chooosePlan-btn">
                CHOOSE PLAN
              </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
export default Pricing;
