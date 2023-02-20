import React from "react";
import Card from "../../../components/Card/Card";
import data from "../../../assets/data/data";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import "./InTheMedia.scss";
const InTheMedia = () => {
  return (
    <div className="in__the__media container">
      <div className="in__the__media__header">
        <div className="in__the__media__header--page">
          <span>Masdar News</span>
          <MdOutlineArrowForwardIos className="forward__icon" />

          <span>In The Media</span>
        </div>
        <div className="in__the__media__header--bar">
          <h2>In The Media</h2>
          <p>
            Follow local, regional and international news coverage of Masdar’s
            expanding business activities and renewable energy portfolio.
          </p>
        </div>
      </div>
      <div className="in__the__media__body">
        {data.map((item, index) => {
          return (
            <Card
              key={index + 1}
              tag={item.tag}
              imgSrc={item.imgSrc}
              heading={item.heading.substring(0, 20) + "..."}
              redirectUrl={item.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InTheMedia;
