import React, { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import LetterCard from "../../../components/LetterCard/LetterCard";
import newsData from "../../../assets/data/newsLetter";
import "./NewsLetter.scss";
const NewsLetter = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [select, setSelect] = useState(false);
  return (
    <div className="news__letter container">
      <div className="news__letter__header">
        <div className="news__letter__header--page">
          <span>Masdar News</span>
          <MdOutlineArrowForwardIos className="forward__icon" />
          <span>News Letter</span>
        </div>
        <div className="news__letter__header--bar">
          <h2>News Letter</h2>
          <p>
            The Source, a Masdar publication, is a monthly newsletter that
            highlights the project breakthroughs, collaborations, and
            initiatives taking place at Masdar, Abu Dhabi’s renewable energy
            company. Subscription to this fully digital newsletter is open to
            all as part of Masdar’s commitment to maintaining a continuous
            dialogue with its stakeholders and accelerating sustainable
            development around the world.ds
          </p>
        </div>
      </div>
      <div className="news__letter__body">
        <div className="filter__select">
          <span>Filter by year</span>
          <select
            name="year"
            id="year"
            onChange={(e) => {
              setSelectedValue(e.target.value);
            }}
            onClick={() => {
              setSelect(!select);
            }}
          >
            <option value="" selected>
              -Select-{" "}
            </option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
          {select ? (
            <MdOutlineKeyboardArrowDown className="select__icon" />
          ) : (
            <MdOutlineKeyboardArrowUp className="select__icon" />
          )}
        </div>
        <div className="letters">
          {newsData
            .filter((item) => {
              return selectedValue == "" ? item : selectedValue == item.year;
            })
            .map((item) => {
              return (
                <LetterCard
                  key={item.id}
                  imgSrc={item.imgSrc}
                  year={item.year}
                  month={item.month}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
