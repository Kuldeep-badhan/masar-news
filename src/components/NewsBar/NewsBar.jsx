import React from "react";
import "./NewsBar.scss";
const NewsBar = ({ imgSrc, heading, date, desc }) => {
  return (
    <div className="news__bar">
      <div className="news__bar--image">
        <img src={imgSrc} alt="image" />
      </div>
      <div className="news__bar--details">
        <h4>{heading}</h4>
        <p>{date}</p>
        <li>{desc}</li>
      </div>
    </div>
  );
};

export default NewsBar;
