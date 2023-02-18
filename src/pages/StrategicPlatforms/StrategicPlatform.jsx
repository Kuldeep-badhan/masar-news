import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import dummyData from "../../assets/data/dummyData";
import { useLocation } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import "./StrategicPlatform.scss";
const StrategicPlatform = () => {
  const [topic, setTopic] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    const pathFinder = () => {
      switch (pathname) {
        case "/Strategic-Platform":
          setTopic("Strategic Platform");
          break;
        case "/ADSW":
          setTopic("ADSW");
          break;
        case "/ZSP":
          setTopic("ZSP");
          break;
        case "/WiSER":
          setTopic("WiSER");
          break;
        case "/Youth":
          setTopic("Youth");
          break;
        default:
          console.log("path not matched");
      }
      return;
    };
    pathFinder();
  }, [pathname, topic]);

  console.log(topic, " hi i am topic");
  console.log(pathname, " hi i am pathname");

  return (
    <div className="strategy container">
      <div className="strategy__header">
        <div className="strategy__header--page">
          <span>Masdar News</span>
          <MdOutlineArrowForwardIos className="forward__icon" />
          <span>{topic}</span>
        </div>
        <div className="strategy__header--bar">
          <h2>{topic}</h2>
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
