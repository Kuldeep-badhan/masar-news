import React from "react";
import Card from "../../../components/Card/Card";
import dummyData from "../../../assets/data/dummyData";
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur excepturi sed dolores natus voluptatem facere unde
            suscipit, beatae vero perferendis fuga distinctio.
          </p>
        </div>
      </div>
      <div className="in__the__media__body">
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

export default InTheMedia;
