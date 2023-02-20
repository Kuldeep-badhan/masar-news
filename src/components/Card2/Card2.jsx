import React from "react";
import { Link } from "react-router-dom";
import "./Card2.scss";
const Card = ({ imagesArray, translateX, cardLoc, cardSetter }) => {
  return (
    <Link to={"#"} className="card2 custom__card2">
      <div className="corousel">
        {imagesArray.map((item) => {
          return (
            <div
              className="corousel__card"
              style={{
                transform: `${translateX}`,
              }}
            >
              <Link to={item.url}>
                <div className="details">
                  <img src={item.imgSrc} alt="image" />
                  <h2>{item.heading.substring(0, 40) + "..."}</h2>
                  <small>{item.tag}</small>
                  <p>{item.desc.substring(0, 80) + "..."}</p>
                  <div className="hover_transition"></div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="cardsbtnContainer">
        <span
          className={cardLoc == 0 ? "cardsbtn active" : "cardsbtn"}
          onClick={() => cardSetter(0)}
        ></span>
        <span
          className={cardLoc == 1 ? "cardsbtn active" : "cardsbtn"}
          onClick={() => cardSetter(1)}
        ></span>
        <span
          className={cardLoc == 2 ? "cardsbtn active" : "cardsbtn"}
          onClick={() => cardSetter(2)}
        ></span>
      </div>
    </Link>
  );
};

export default Card;
