import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import dummyData from "../../assets/data/dummyData";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useLocation } from "react-router-dom";
import "./Topic.scss";
const Topic = () => {
  const [topic, setTopic] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    const pathFinder = () => {
      switch (pathname) {
        case "/Corporate":
          setTopic("Corporate");
          break;
        case "/Green-Hydrogen":
          setTopic("Green Hydrogen");
          break;
        case "/Projects":
          setTopic("Projects");
          break;
        case "/Awards":
          setTopic("Awards");
          break;
        case "/Partnership":
          setTopic("Corporate");
          break;
        case "/Innovation":
          setTopic("Innovation");
          break;
        case "/Investments":
          setTopic("Investments");
          break;
        case "/Insights":
          setTopic("Insights");
          break;
        case "/Destination":
          setTopic("Destination");
          break;
        case "/Catalyst":
          setTopic("Catalyst");
          break;
        case "/Vip-Visits":
          setTopic("VIP Visits");
          break;
        case "/Reports":
          setTopic("Reports");
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
    <div className="topic container">
      <div className="topic__header">
        <div className="topic__header--page">
          <span>Masdar News</span>
          <MdOutlineArrowForwardIos className="forward__icon" />
          <span>{topic}</span>
        </div>
        <div className="topic__header--bar">
          <h2>{topic}</h2>
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
