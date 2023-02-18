import React from "react";
import Card from "../../components/Card/Card";
import dummyData from "../../assets/data/dummyData";
import "./Topic.scss";
const Topic = () => {
  return (
    <div className="topic">
      <div className="topic__header">
        <div className="topic__header--page">page</div>
        <div className="topic__header--bar">Topics</div>
      </div>
      <div className="topic__body">
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
