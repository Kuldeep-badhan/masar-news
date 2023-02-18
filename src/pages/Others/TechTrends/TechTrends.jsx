import React from "react";
import Card from "../../../components/Card/Card";
import data from "../../../assets/data/data";
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
            Expertise on the latest trends in clean-tech, renewable energy and
            sustainable development.
          </p>
        </div>
      </div>
      <div className="tech__trends__body">
        {data.map((item, index) => {
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
