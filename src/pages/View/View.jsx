import React from "react";
import data from "../../assets/data/data.js";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Card from "../../components/Card/Card.jsx";
import clean1 from "../../assets/homeImg/clean1.jpg";
import clean2 from "../../assets/homeImg/clean2.jpg";
import clean3 from "../../assets/homeImg/clean3.jpg";
import clean4 from "../../assets/homeImg/clean4.jpg";

import "./View.scss";
import { useParams } from "react-router-dom";
const View = () => {
  const id = useParams().id;
  const clean = [
    {
      heading: "heading",
      desc: "description",
      imgSrc: clean1,
      tag: "corporate",
    },
    {
      heading: "heading",
      desc: "description",
      imgSrc: clean2,
      tag: "corporate",
    },
    {
      heading: "heading",
      desc: "description",
      imgSrc: clean3,
      tag: "corporate",
    },
  ];
  return (
    <div className="view container">
      {data
        .filter((item) => item.id == id)
        .map((mapItem) => {
          return (
            <>
              <div className="view__header">
                <span>Masdar News</span>
                <MdOutlineArrowForwardIos className="view__icon" />
                <span>{mapItem.tag}</span>
                <MdOutlineArrowForwardIos className="view__icon" />
                <span>{mapItem.heading}</span>
              </div>
              <div className="view__body">
                <div className="left">
                  <div className="top">
                    <h5>{mapItem.heading}</h5>
                    <p>
                      {" "}
                      <span>Publishing Date</span> {mapItem.date}{" "}
                    </p>
                    <p>
                      <span>Topic</span> {mapItem.topic}{" "}
                    </p>
                  </div>
                  <div className="bottom">
                    <div className="topic__image">
                      <img src={mapItem.imgSrc} alt="topic image" />
                    </div>
                    <div className="topic__desc">{mapItem.desc}</div>
                  </div>
                </div>
                <div className="right">
                  <strong>Similar Articles</strong>
                  <div className="view__cards">
                    {data
                      .filter(
                        (item) =>
                          item.tag == mapItem.tag && item.id !== mapItem.id
                      )
                      .map((item, index) => {
                        return (
                          <Card
                            key={index + 1}
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
              </div>
            </>
          );
        })}
    </div>
  );
};

export default View;
