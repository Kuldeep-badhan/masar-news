import React from "react";
import Card from "../../components/Card/Card";
import dummyData from "../../assets/data/dummyData";
import "./StrategicPlatform.scss";
const StrategicPlatform = () => {
  return (
    <div className="strategy container">
      <div className="strategy__header">
        <div className="strategy__header--page">
          <span>Masdar News</span>
          <span>arrow</span>
          <span>Strategic Platform</span>
        </div>
        <div className="strategy__header--bar">
          <h2>Strategic Platform</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur excepturi sed dolores natus voluptatem facere unde
            suscipit, beatae vero perferendis fuga distinctio.
          </p>
        </div>
      </div>
      <div className="strategy__body">
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

export default StrategicPlatform;
