import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import data from "../../assets/data/data.js";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useLocation } from "react-router-dom";
import "./Topic.scss";
const Topic = () => {
  const [topic, setTopic] = useState("");
  const [topicPara, setTopicPara] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    const pathFinder = () => {
      switch (pathname) {
        case "/Corporate":
          setTopic("Corporate");
          setTopicPara("Corporate description");
          break;
        case "/Green-Hydrogen":
          setTopicPara("Green Hydrogen");
          setTopic("Green Hydrogen");
          break;
        case "/Projects":
          setTopicPara(
            "News about Masdar’s projects in Clean Energy and Sustainable Real Estate."
          );
          setTopic("Projects");
          break;
        case "/Awards":
          setTopicPara(
            "News and announcements about awards won by Masdar, Masdar City and its related entities and assets."
          );
          setTopic("Awards");
          break;
        case "/Partnership":
          setTopicPara(
            "Masdar collaborates with many international and national entities to bring projects in clean energy and sustainable urban development to fruition."
          );
          setTopic("Partnership");
          break;
        case "/Innovation":
          setTopicPara(
            "Masdar City is a ‘greenprint’ for sustainable development and home to many innovations by third-party companies aimed at advancing sustainable development."
          );
          setTopic("Innovation");
          break;
        case "/Investments":
          setTopicPara(
            "Storied about the Masdar Free Zone and Masdar City’s third-party developments."
          );
          setTopic("Investments");
          break;
        case "/Insights":
          setTopicPara(
            "The latest news and insights from Masdar’s senior management."
          );
          setTopic("Insights");
          break;
        case "/Destination":
          setTopicPara(
            "Welcoming delegations and schools, events, video and photoshoots, and investments, Masdar City is the perfect destination to live, grow and learn."
          );
          setTopic("Destination");
          break;
        case "/Catalyst":
          setTopicPara(
            "News and stories about Masdar and BP- supported The Catalyst and the start-up companies it supports."
          );
          setTopic("Catalyst");
          break;
        case "/Vip-Visits":
          setTopicPara(
            "Visits to Masdar and Masdar City by international and national dignitaries, government officials, thought-leaders, and public figures."
          );
          setTopic("VIP Visits");
          break;
        case "/Reports":
          setTopicPara(
            "News related to Masdar-issued reports and publications."
          );
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
          <p>{topicPara}</p>
        </div>
      </div>
      <div className="topic__body">
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
