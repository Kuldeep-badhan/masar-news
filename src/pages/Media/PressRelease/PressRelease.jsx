import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import NewsBar from "../../../components/NewsBar/NewsBar";
import newsarr from "../../../assets/data/pressRelease";
import "./PressRelease.scss";
const PressRelease = () => {
  return (
    <div className="press__release container">
      <div className="press__release__header">
        <div className="press__release__header--page">
          <span>Masdar News</span>
          <MdOutlineArrowForwardIos className="forward__icon" />
          <span>Press Release</span>
        </div>
        <div className="press__release__header--bar">
          <h2>Press Release</h2>
          <p>
            Press releases on Masdar announcements, achievements and
            contributions towards accelerating the development,
            commercialisation and deployment of clean energy technologies and
            solutions
          </p>
        </div>
      </div>
      <div className="press__release__body">
        {newsarr.map((news) => {
          return (
            <NewsBar
              heading={news.heading}
              imgSrc={news.imgSrc}
              desc={news.desc}
              date={news.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PressRelease;
