import React from "react";
import Card from "../../components/Card/Card";
import dummyData from "../../assets/data/data";
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
            Masdar is one of the largest developers of renewable energy in the
            Middle East and is at the forefront of clean-tech innovation.
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
