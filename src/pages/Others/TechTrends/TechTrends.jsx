import React from "react";
import Card from "../../../components/Card/Card";
import dummyData from "../../../assets/data/dummyData";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./TechTrends.scss";
const Topic = () => {
  return (
    <div className="tech__trends container">
      <div className="tech__trends__header">
        <div className="tech__trends__header--page">
          <span>Masdar News</span>
          <MdOutlineArrowForwardIos className="forward__icon" />
          <span>Tech Trends</span>
        </div>
        <div className="tech__trends__header--bar">
          <h2>Tech Trends</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur excepturi sed dolores natus voluptatem facere unde
            suscipit, beatae vero perferendis fuga distinctio.
          </p>
        </div>
      </div>
      <div className="tech__trends__body">
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

export default Topic;
