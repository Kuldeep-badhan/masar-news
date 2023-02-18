import React from "react";
import Card from "../../components/Card/Card";
import dummyData from "../../assets/data/dummyData";
import "./Topic.scss";
const Topic = () => {
  return (
    <div className="topic container">
      <div className="topic__header">
        <div className="topic__header--page">
          <span>Masdar News</span>
          <span>arrow</span>
          <span>Corporate</span>
        </div>
        <div className="topic__header--bar">
          <h2>Corporate</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur excepturi sed dolores natus voluptatem facere unde
            suscipit, beatae vero perferendis fuga distinctio.
          </p>
        </div>
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
