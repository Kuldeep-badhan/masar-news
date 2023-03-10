import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbSocial } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import logo from "../../assets/News.svg";
import awards from "../../assets/topics/awards.png";
import catalyst from "../../assets/topics/catalyst.png";
import Corporate from "../../assets/topics/Corporate.png";
import destinations from "../../assets/topics/destinations.png";
import Green from "../../assets/topics/Green.png";
import innovation from "../../assets/topics/innovation.png";
import insights from "../../assets/topics/insights.png";
import investments from "../../assets/topics/investments.png";
import partnership from "../../assets/topics/partnership.png";
import projects from "../../assets/topics/projects.png";
import reports from "../../assets/topics/reports.png";
import vip from "../../assets/topics/vip.png";
import adsw from "../../assets/strategy/adsw.png";
import wiser from "../../assets/strategy/WiSER.png";
import youth from "../../assets/strategy/Youth.png";
import zsp from "../../assets/strategy/ZSP.png";
const Header = () => {
  const [bar, setBar] = useState(false);
  const [toggleTopic, setToggleTopic] = useState(false);
  const [strategyToggle, setStrategyToggle] = useState(false);
  const [mediaToggle, setMediaToggle] = useState(false);
  const [search, setSearch] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const { pathname } = useLocation();
  const myRef = React.createRef();
  const resizeFn = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    window.addEventListener("resize", resizeFn);
    return () => {
      window.removeEventListener("resize", resizeFn);
    };
  }, [innerWidth]);
  return (
    <div id="header" ref={myRef} className="header__container">
      <div className="header">
        <div className="header__logo">
          <Link
            onClick={() => {
              setBar(false);
              setToggleTopic(false);
            }}
            to={"/"}
          >
            <img src={logo} alt="logo image" />
          </Link>
        </div>
        <div className="bar">
          <RxHamburgerMenu
            onClick={() => {
              setBar(!bar);
              setMediaToggle(false);
              setStrategyToggle(false);
              setToggleTopic(false);
            }}
          />
        </div>
        {bar || innerWidth >= 1251 ? (
          <div className="header__main-links">
            <ul>
              <li>Explore by</li>
              <li>
                <Link
                  onClick={() => {
                    setBar(false);
                    setToggleTopic(false);
                  }}
                  to={"/Clean-Energy"}
                >
                  CLEAN ENERGY
                </Link>
              </li>
              <li>
                <div
                  className="link_strategy"
                  onMouseEnter={() => {
                    innerWidth >= 1250 && setStrategyToggle(true);
                  }}
                  onMouseLeave={() => {
                    innerWidth >= 1250 && setStrategyToggle(false);
                  }}
                  onClick={() => {
                    setStrategyToggle(!strategyToggle);
                  }}
                >
                  <Link
                    onClick={() => {
                      setBar(false);
                      setToggleTopic(false);
                    }}
                    to={"/Strategic-Platform"}
                  >
                    {" "}
                    STRATEGY PLATFORM
                  </Link>

                  {strategyToggle ? (
                    innerWidth >= 1250 ? (
                      <MdOutlineKeyboardArrowDown />
                    ) : (
                      <AiOutlineMinus />
                    )
                  ) : innerWidth >= 1250 ? (
                    <MdOutlineKeyboardArrowUp />
                  ) : (
                    <AiOutlinePlus />
                  )}
                </div>
                {strategyToggle && (
                  <div
                    className="header__strategy-nav show"
                    onMouseEnter={() => setStrategyToggle(true)}
                    onMouseLeave={() => setStrategyToggle(false)}
                  >
                    <div className="row">
                      <Link
                        onClick={() => {
                          setBar(false);
                          setToggleTopic(false);
                        }}
                        to={"/ADSW"}
                      >
                        <li>
                          <img src={adsw} alt="image" />
                          ADSW
                        </li>
                      </Link>
                      <Link
                        onClick={() => {
                          setBar(false);
                          setToggleTopic(false);
                        }}
                        to={"/ZSP"}
                      >
                        <li>
                          <img src={zsp} alt="image" />
                          ZSP
                        </li>
                      </Link>
                    </div>
                    <div className="row">
                      <Link
                        onClick={() => {
                          setBar(false);
                          setToggleTopic(false);
                        }}
                        to={"/WiSER"}
                      >
                        <li>
                          <img src={wiser} alt="image" />
                          WiSER
                        </li>
                      </Link>
                      <Link
                        onClick={() => {
                          setBar(false);
                          setToggleTopic(false);
                        }}
                        to={"/Youth"}
                      >
                        <li>
                          <img src={youth} alt="image" />
                          Youth
                        </li>
                      </Link>
                    </div>
                  </div>
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
                <Link
                  onClick={() => {
                    setBar(false);
                    setToggleTopic(false);
                  }}
                  to={"/Tech-Trends"}
                >
                  Tech Trends
                </Link>
              </li>
              <li
                onMouseEnter={() => {
                  innerWidth >= 1250 && setMediaToggle(true);
                }}
                onMouseLeave={() => {
                  innerWidth >= 1250 && setMediaToggle(false);
                }}
                onClick={() => setMediaToggle(!mediaToggle)}
              >
                <div className="link_media">
                  <Link
                    onClick={() => {
                      setBar(false);
                      setToggleTopic(false);
                    }}
                    to={"#"}
                  >
                    Media
                  </Link>
                  {mediaToggle ? (
                    innerWidth >= 1250 ? (
                      <MdOutlineKeyboardArrowDown />
                    ) : (
                      <AiOutlineMinus />
                    )
                  ) : innerWidth >= 1250 ? (
                    <MdOutlineKeyboardArrowUp />
                  ) : (
                    <AiOutlinePlus />
                  )}
                </div>

                {mediaToggle && (
                  <div
                    className={"header__media show"}
                    // onMouseLeave={() => setMediaToggle(false)}
                  >
                    <ul>
                      <Link
                        onClick={() => {
                          setBar(false);
                          setToggleTopic(false);
                        }}
                        to={"/In-The-Media"}
                      >
                        <li>In The Media</li>
                      </Link>
                      <Link
                        onClick={() => {
                          setBar(false);
                          setToggleTopic(false);
                        }}
                        to={"/Press-Release"}
                      >
                        <li>Press Releases</li>
                      </Link>
                      <Link
                        onClick={() => {
                          setBar(false);
                          setToggleTopic(false);
                        }}
                        to={"/News-Letter"}
                      >
                        <li>News Letter</li>
                      </Link>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link
                  onClick={() => {
                    setBar(false);
                    setToggleTopic(false);
                  }}
                  to={"/Events"}
                >
                  Events
                </Link>
              </li>
            </ul>
            {toggleTopic && (
              <div className="header__topics">
                <ul>
                  {/* <div className="row"> */}
                  <Link
                    onClick={() => {
                      setBar(false);
                      setToggleTopic(false);
                    }}
                    to={"/Corporate"}
                  >
                    <li>
                      <img src={Corporate} alt="image" />
                      Corporate
                    </li>
                  </Link>
                  <Link
                    onClick={() => {
                      setBar(false);
                      setToggleTopic(false);
                    }}
                    to={"/Green-Hydrogen"}
                  >
                    <li>
                      <img src={Green} alt="image" />
                      Green Hydrogen
                    </li>
                  </Link>
                  <Link
                    onClick={() => {
                      setBar(false);
                      setToggleTopic(false);
                    }}
                    to={"/Projects"}
                  >
                    <li>
                      <img src={projects} alt="image" />
                      Projects
                    </li>
                  </Link>
                  {/* </div> */}
                  {/* <div className="row"> */}
                  <Link
                    onClick={() => {
                      setBar(false);
                      setToggleTopic(false);
                    }}
                    to={"/Awards"}
                  >
                    <li>
                      <img src={awards} alt="image" />
                      Awards
                    </li>
                  </Link>
                  <Link
                    onClick={() => {
                      setBar(false);
                      setToggleTopic(false);
                    }}
                    to={"/Partnership"}
                  >
                    <li>
                      <img src={partnership} alt="image" />
                      Partnership
                    </li>
                  </Link>
                  <Link
                    onClick={() => {
                      setBar(false);
                      setToggleTopic(false);
                    }}
                    to={"/Innovation"}
                  >
                    <li>
                      <img src={innovation} alt="image" />
                      Innovation
                    </li>
                  </Link>
                  {/* </div> */}
                  {/* <div className="row"> */}
                  <Link
                    onClick={() => {
                      setBar(false);
                      setToggleTopic(false);
                    }}
                    to={"/Investments"}
                  >
                    <li>
                      <img src={investments} alt="image" />
                      Investments
                    </li>
                  </Link>
                  <Link
                    onClick={() => {
                      setBar(false);
                      setToggleTopic(false);
                    }}
                    to={"/Insights"}
                  >
                    <li>
                      <img src={insights} alt="image" />
                      Insights
                    </li>
                  </Link>
                  <Link
                    onClick={() => {
                      setBar(false);
                      setToggleTopic(false);
                    }}
                    to={"/Destination"}
                  >
                    <li>
                      <img src={destinations} alt="image" />
                      Destination
                    </li>
                  </Link>
                  {/* </div> */}
                  {/* <div className="row"> */}
                  <Link
                    onClick={() => {
                      setBar(false);
                      setToggleTopic(false);
                    }}
                    to={"/Catalyst"}
                  >
                    <li>
                      <img src={catalyst} alt="image" />
                      Catalyst
                    </li>
                  </Link>
                  <Link
                    onClick={() => {
                      setBar(false);
                      setToggleTopic(false);
                    }}
                    to="Vip-Visits"
                  >
                    <li>
                      <img src={vip} alt="image" />
                      VIP Visits
                    </li>
                  </Link>
                  <Link
                    onClick={() => {
                      setBar(false);
                      setToggleTopic(false);
                    }}
                    to={"/Reports"}
                  >
                    <li>
                      <img src={reports} alt="image" />
                      Reports
                    </li>
                  </Link>
                  {/* </div> */}
                </ul>
              </div>
            )}
          </div>
        ) : null}
        <div className="header__search-box">
          <span>arabic</span>
          <div className="header__icons">
            <TbSocial className="icon" />
            {search ? (
              <RxCross1 className="icon" onClick={() => setSearch(false)} />
            ) : (
              <AiOutlineSearch
                className="icon"
                onClick={() => setSearch(true)}
              />
            )}
          </div>

          <div className={search ? "header__search open" : "header__search "}>
            <div className="search__wrapper">
              <label htmlFor="search">Enter keyword:</label>
              <input type="text" name="search" id="search" />
            </div>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
