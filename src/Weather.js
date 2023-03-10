import React from "react";

import "./App.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="overview">
        <h1>Manchester</h1>
        <ul>
          <li>
            <span>Sunday 12:20</span>
          </li>
          <li>overcast clouds</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="Clear"
          />
          <strong>10°C</strong>
          <span className="units">
            <a href="#">°C</a>|<a href="#">°F</a>
          </span>
        </div>

        <div className="col-6">
          <ul>
            <li>
              Humidity:<span>76</span>
            </li>
            <li>
              Wind: <span>9 m/h</span> m/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
