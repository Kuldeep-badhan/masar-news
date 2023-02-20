import React from "react";
import Card from "../../../components/Card/Card";
import data from "../../../assets/data/data";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import "./Events.scss";
const Events = () => {
  return (
    <div className="events container">
      <div className="events__header">
        <div className="events__header--page">
          <span>Masdar News</span>
          <MdOutlineArrowForwardIos className="forward__icon" />
          <span>Events</span>
        </div>
        <div className="events__header--bar">
          <h2>Events</h2>
          <p>
            Several upcoming corporate and community events are planned to
            maintain a continuous dialogue with our stakeholders
          </p>
        </div>
      </div>
      <div className="events__body">
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

export default Events;
