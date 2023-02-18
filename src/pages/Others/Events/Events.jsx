import React from "react";
import Card from "../../../components/Card/Card";
import dummyData from "../../../assets/data/dummyData";
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur excepturi sed dolores natus voluptatem facere unde
            suscipit, beatae vero perferendis fuga distinctio.
          </p>
        </div>
      </div>
      <div className="events__body">
        {dummyData.map((item, index) => {
          return (
            <Card
              key={index + 1}
              tag={item.tag}
              desc={item.desc}
              imgSrc={item.imgSrc}
              heading={item.heading}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Events;
