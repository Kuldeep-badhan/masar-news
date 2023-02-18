import React from "react";
import Card from "../../components/Card/Card";
import dummyData from "../../assets/data/dummyData";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./CleanEnegy.scss";
const CleanEnegy = () => {
  return (
    <div className="clean__energy container">
      <div className="clean__energy__header">
        <div className="clean__energy__header--page">
          <span>Masdar News</span>
          <MdOutlineArrowForwardIos className="forward__icon" />
          <span>Clean Energy</span>
        </div>
        <div className="clean__energy__header--bar">
          <h2>Clean Energy</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur excepturi sed dolores natus voluptatem facere unde
            suscipit, beatae vero perferendis fuga distinctio.
          </p>
        </div>
      </div>
      <div className="clean__energy__body">
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

export default CleanEnegy;
