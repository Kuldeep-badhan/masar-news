import React, { useState, useEffect } from "react";
import "./Header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbSocial } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/News.svg";
import img from "../../assets/images/img-1.jpg";
const Header = () => {
  const [bar, setBar] = useState(false);
  const [toggleTopic, setToggleTopic] = useState(false);
  const [strategyToggle, setStrategyToggle] = useState(false);
  const [mediaToggle, setMediaToggle] = useState(false);

  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo image" />
      </div>
      <div className="bar">
        <RxHamburgerMenu />
      </div>

      <div className="header__main-links">
        <ul>
          <li>Explore by</li>
          <li>
            <Link to={"/Clean-Energy"}>CLEAN ENERGY</Link>
          </li>
          <li className="link_strategy">
            <Link
              to={"/Strategic-Platform"}
              onMouseEnter={() => setStrategyToggle(true)}
              onMouseLeave={() => setStrategyToggle(false)}
            >
              {" "}
              STRATEGY PLATFORM
            </Link>
            {strategyToggle ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </li>
          <li
            className="link_topics"
            onClick={() => setToggleTopic(!toggleTopic)}
          >
            TOPICS
            {toggleTopic ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </li>
          <li>
            <Link to={"/Tech-Trends"}>Tech Trends</Link>
          </li>
          <li
            className="link_media"
            onMouseEnter={() => setMediaToggle(true)}
            onMouseLeave={() => setMediaToggle(false)}
          >
            <Link to={"/Media"}>Media</Link>
            {mediaToggle ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </li>
          <li>
            <Link to={"/Events"}>Events</Link>
          </li>
        </ul>
        {toggleTopic && (
          <div className="header__topics">
            <ul>
              <div className="row">
                <Link to={"/Corporate"}>
                  <li>
                    <img src={img} alt="image" />
                    Corporate
                  </li>
                </Link>
                <Link to={"/Green-Hydrogen"}>
                  <li>
                    <img src={img} alt="image" />
                    Green Hydrogen
                  </li>
                </Link>
                <Link to={"/Projects"}>
                  <li>
                    <img src={img} alt="image" />
                    Projects
                  </li>
                </Link>
              </div>
              <div className="row">
                <Link to={"/Awards"}>
                  <li>
                    <img src={img} alt="image" />
                    Awards
                  </li>
                </Link>
                <Link to={"/Partnership"}>
                  <li>
                    <img src={img} alt="image" />
                    Partnership
                  </li>
                </Link>
                <Link to={"/Innovation"}>
                  <li>
                    <img src={img} alt="image" />
                    Innovation
                  </li>
                </Link>
              </div>
              <div className="row">
                <Link to={"/Investments"}>
                  <li>
                    <img src={img} alt="image" />
                    Investments
                  </li>
                </Link>
                <Link to={"/Insights"}>
                  <li>
                    <img src={img} alt="image" />
                    Insights
                  </li>
                </Link>
                <Link to={"/Destination"}>
                  <li>
                    <img src={img} alt="image" />
                    Destination
                  </li>
                </Link>
              </div>
              <div className="row">
                <Link to={"/Catalyst"}>
                  <li>
                    <img src={img} alt="image" />
                    Catalyst
                  </li>
                </Link>
                <Link to="Vip-Visits">
                  <li>
                    <img src={img} alt="image" />
                    VIP Visits
                  </li>
                </Link>
                <Link to={"/Reports"}>
                  <li>
                    <img src={img} alt="image" />
                    Reports
                  </li>
                </Link>
              </div>
            </ul>
          </div>
        )}
        {strategyToggle && (
          <div
            className="header__strategy-nav"
            // onMouseEnter={() => setStrategyToggle(true)}
            onMouseLeave={() => setStrategyToggle(false)}
          >
            <div className="row">
              <Link to={"/ADSW"}>
                <li>
                  <img src={img} alt="image" />
                  ADSW
                </li>
              </Link>
              <Link to={"/ZSP"}>
                <li>
                  <img src={img} alt="image" />
                  ZSP
                </li>
              </Link>
            </div>
            <div className="row">
              <Link to={"/WiSER"}>
                <li>
                  <img src={img} alt="image" />
                  WiSER
                </li>
              </Link>
              <Link to={"/Youth"}>
                <li>
                  <img src={img} alt="image" />
                  Youth
                </li>
              </Link>
            </div>
          </div>
        )}{" "}
        {mediaToggle && (
          <div
            className="header__media"
            onMouseLeave={() => setMediaToggle(false)}
          >
            <ul>
              <Link to={"/In-The-Media"}>
                <li>In The Media</li>
              </Link>
              <Link to={"/Press-Release"}>
                <li>Press Releases</li>
              </Link>
              <Link to={"/News-Letter"}>
                <li>News Letter</li>
              </Link>
            </ul>
          </div>
        )}
      </div>

      <div className="header__search-box">
        <span>arabic</span>
        <div className="header__icons">
          <TbSocial className="icon" />

          <AiOutlineSearch className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
