import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
const Card = ({ heading, tag, desc, imgSrc, redirectUrl }) => {
  return (
    <Link
      to={redirectUrl}
      className="card custom__card"
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <h2>{heading}</h2>
      <small>{tag}</small>
      <p>{desc}</p>

      <div className="hover_transition"></div>
    </Link>
  );
};

export default Card;
