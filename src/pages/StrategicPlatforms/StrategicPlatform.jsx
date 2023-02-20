import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import dummyData from "../../assets/data/data";
import { useLocation } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import "./StrategicPlatform.scss";
const StrategicPlatform = () => {
  const [topic, setTopic] = useState("");
  const [topicPara, setTopicPara] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    const pathFinder = () => {
      switch (pathname) {
        case "/Strategic-Platform":
          setTopic("Strategic Platform");
          setTopicPara(
            "Masdar’s initiatives and world-class industry platforms are advancing the global dialogue on sustainability."
          );
          break;
        case "/ADSW":
          setTopic("ADSW");
          setTopicPara(
            "The Masdar-hosted Abu Dhabi Sustainability Week is one of the largest sustainability gatherings in the world and acts as a global platform for advancing sustainable development."
          );
          break;
        case "/ZSP":
          setTopic("Zayed Sustainability Prize");
          setTopicPara(
            "The Zayed Sustainability Prize is an annual award that rewards companies and organisations that demonstrate tangible, positive impact through sustainable solutions."
          );
          break;
        case "/WiSER":
          setTopic("WiSER");
          setTopicPara(
            "          The Women in Sustainability, Environment and Renewable Energy platform is dedicated to inspiring women and girls to play an active role in addressing global sustainability challenges.          "
          );
          break;
        case "/Youth":
          setTopic("Youth");
          setTopicPara(
            "News and stories about youth and Masdar’s youth-related initiatives and strategic platforms."
          );
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
          <p>{topicPara}</p>
        </div>
      </div>
      <div className="strategy__body">
        {dummyData.map((item) => {
          return (
            <Card
              key={item.id}
              tag={item.tag}
              desc={item.desc.substring(0, 40) + "..."}
              imgSrc={item.imgSrc}
              heading={item.heading.substring(0, 20) + "..."}
              redirectUrl={item.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StrategicPlatform;
