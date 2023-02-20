import React from "react";
import "./LetterCard.scss";
import { Link } from "react-router-dom";
const LetterCard = ({ imgSrc, year, month }) => {
  return (
    <Link to={"#"} className="letter__card custom__card">
      <div className="letter__card--image">
        <img src={imgSrc} alt="letter image" />
      </div>
      <div className="letter__card--year">
        <span> {month}</span>
        <span> {year}</span>
      </div>
    </Link>
  );
};

export default LetterCard;
