import React from "react";
import { Link } from "react-router-dom";
import {
  BsArrowRight,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import shekh from "../../assets/homeImg/shekh.jpeg";
import home1 from "../../assets/homeImg/homeg1.jpg";
import home2 from "../../assets/homeImg/homeg2.jpg";
import home3 from "../../assets/homeImg/homeg3.jpg";
import home4 from "../../assets/homeImg/homeg4.jpg";
import editor1 from "../../assets/homeImg/editor1.jpg";
import editor2 from "../../assets/homeImg/editor2.jpg";
import editor3 from "../../assets/homeImg/editor3.jpg";
import clean1 from "../../assets/homeImg/clean1.jpg";
import clean2 from "../../assets/homeImg/clean2.jpg";
import clean3 from "../../assets/homeImg/clean3.jpg";
import clean4 from "../../assets/homeImg/clean4.jpg";
import strategy1 from "../../assets/homeImg/strategy1.jpg";
import strategy2 from "../../assets/homeImg/strategy2.png";
import strategy3 from "../../assets/homeImg/strategy3.jpeg";
import techtrends from "../../assets/homeImg/techtrends.jpg";
import inthemedia1 from "../../assets/homeImg/inthemedia1.jpg";
import inthemedia2 from "../../assets/homeImg/inthemedia2.jpg";
import Card from "../../components/Card/Card";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Home.scss";
const Home = () => {
  const home = [
    {
      heading: "heading",
      desc: "description",
      imgSrc: shekh,
      tag: "corporate",
    },
  ];
  const techtrendsarr = [
    {
      heading: "heading",
      desc: "description",
      imgSrc: techtrends,
      tag: "corporate",
    },
  ];
  const homeg = [
    {
      heading: "heading",
      desc: "description",
      imgSrc: home1,
      tag: "corporate",
    },
    {
      heading: "heading",
      desc: "description",
      imgSrc: home2,
      tag: "corporate",
    },
    {
      heading: "heading",
      desc: "description",
      imgSrc: home3,
      tag: "corporate",
    },
    {
      heading: "heading",
      desc: "description",
      imgSrc: home4,
      tag: "corporate",
    },
  ];
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
    {
      heading: "heading",
      desc: "description",
      imgSrc: clean4,
      tag: "corporate",
    },
  ];
  const strategy = [
    {
      heading: "heading",
      desc: "description",
      imgSrc: strategy1,
      tag: "corporate",
    },
    {
      heading: "heading",
      desc: "description",
      imgSrc: strategy2,
      tag: "corporate",
    },
    {
      heading: "heading",
      desc: "description",
      imgSrc: strategy3,
      tag: "corporate",
    },
  ];
  const intheMedia = [
    {
      heading: "heading",
      desc: "description",
      imgSrc: inthemedia1,
      tag: "corporate",
    },
    {
      heading: "heading",
      desc: "description",
      imgSrc: inthemedia2,
      tag: "corporate",
    },
    {
      heading: "heading",
      desc: "description",
      imgSrc: techtrends,
      tag: "corporate",
    },
  ];

  return (
    <div className="home container">
      <div className="home__top">
        <div className="home__top--left">
          {" "}
          {home.map((item, index) => {
            return (
              <Card
                key={index + 1}
                heading={item.heading}
                desc={item.desc}
                imgSrc={item.imgSrc}
                tag={item.tag}
              />
            );
          })}
        </div>
        <div className="home__top--right">
          {homeg.map((item, index) => {
            return (
              <Card
                key={index + 1}
                heading={item.heading}
                desc={item.desc}
                imgSrc={item.imgSrc}
                tag={item.tag}
              />
            );
          })}
        </div>
      </div>
      <div className="home__editor-choice">
        <h3>Editor's Choice</h3>

        <div className="choice">
          <img src={editor1} alt="image" />
          <div className="choice__desc">
            <p>Lorem ipsum dolor sit amet </p>
            <span>INSIGHTS</span>
          </div>
        </div>
        <div className="choice">
          <img src={editor2} alt="image" />
          <div className="choice__desc">
            <p>Lorem ipsum dolor sit amet </p>
            <span>INSIGHTS</span>
          </div>
        </div>
        <div className="choice">
          <img src={editor3} alt="image" />
          <div className="choice__desc">
            <p>Lorem ipsum dolor sit amet </p>
            <span>INSIGHTS</span>
          </div>
        </div>
      </div>
      <div className="home__clean-energy">
        <div className="top">
          <h3>Clean Energy</h3>
          <Link to={"#"}>
            <BsArrowRight />
            <span> Read More</span>
          </Link>
        </div>
        <div className="bottom">
          {clean.map((item, index) => {
            return (
              <div className="energy__option">
                <Card
                  key={index + 1}
                  heading={item.heading}
                  imgSrc={item.imgSrc}
                  desc={item.desc}
                  tag={item.tag}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="home__strategic-platform">
        <div className="left">
          <div className="top">
            <h3>Strategic Platform</h3>
            <Link to={"#"}>
              <BsArrowRight />
              <span> Read More</span>
            </Link>
          </div>
          <div className="bottom">
            {strategy.map((item, index) => {
              return (
                <div className="energy__option">
                  <Card
                    key={index + 1}
                    heading={item.heading}
                    imgSrc={item.imgSrc}
                    desc={item.desc}
                    tag={item.tag}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="right">
          <div className="top">
            <h3>Tech Trends</h3>
            <Link to={"#"}>
              <BsArrowRight />
              <span> Read More</span>
            </Link>
          </div>
          <div className="bottom">
            {techtrendsarr.map((item, index) => {
              return (
                <div className="energy__option">
                  <Card
                    key={index + 1}
                    heading={item.heading}
                    imgSrc={item.imgSrc}
                    desc={item.desc}
                    tag={item.tag}
                  />
                </div>
              );
            })}
            <p className="trends__para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis maiores recusandae adipisci est odio ut. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Qui porro debitis aut
              facilis amet perspiciatis cupiditate corporis id impedit est.
            </p>
          </div>
        </div>
      </div>
      <div className="home__in-the-media">
        <div className="top">
          <h3>In The Media</h3>
          <Link to={"#"}>
            <BsArrowRight />
            <span> Read More</span>
          </Link>
        </div>
        <div className="bottom">
          {intheMedia.map((item, index) => {
            return (
              <div className="energy__option">
                <Card
                  key={index + 1}
                  heading={item.heading}
                  imgSrc={item.imgSrc}
                  desc={item.desc}
                  tag={item.tag}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="home__social-media">
        <div className="left">
          <div className="top">
            <h3>Social Media</h3>
            <Link to={"#"}>
              <BsArrowRight />
              <span> Read More</span>
            </Link>
          </div>
          <div className="bottom">
            <div className="social__card ">
              <div className="social__card--header instagram">
                <span className="icon">
                  {" "}
                  <BsInstagram />{" "}
                </span>
                <p>View on Instagram</p>
              </div>
              <div className="social__card--body">Instgram</div>
            </div>
            <div className="social__card ">
              <div className="social__card--header twitter">
                <div className="icon">
                  {" "}
                  <BsTwitter />{" "}
                </div>
                <p>View on Twitter</p>
              </div>
              <div className="social__card--body">Twitter</div>
            </div>
            <div className="social__card ">
              <div className="social__card--header youtube">
                <div className="icon">
                  {" "}
                  <BsYoutube />{" "}
                </div>
                <p>Watch on Youtube</p>
              </div>
              <div className="social__card--body">Youtube</div>
            </div>
          </div>
        </div>
        <div className="right">
          <h3>Connect with us</h3>
          <div className="bottom">
            <a
              href="https://facebook.com"
              target={"blank"}
              className="social__bar facebook"
            >
              <span className="icon">
                <FaFacebookF />
              </span>
              <div className="social__desc">
                <span>Facebook</span>
                <span>1400000 likes </span>
              </div>
            </a>
            <a
              href="https://linkedin.com"
              target={"blank"}
              className="social__bar linkedin"
            >
              <span className="icon">
                <FaLinkedinIn />
              </span>
              <div className="social__desc">
                <span>LinkedIn</span>
                <span>1400000 followers </span>
              </div>
            </a>
            <a
              href="https://twitter.com"
              target={"blank"}
              className="social__bar twitter"
            >
              <span className="icon">
                <BsTwitter />
              </span>
              <div className="social__desc">
                <span>Twitter</span>
                <span>1400000 followers </span>
              </div>
            </a>
            <a
              href="https://youtube.com"
              target={"blank"}
              className="social__bar youtube"
            >
              <span className="icon">
                <BsYoutube />
              </span>
              <div className="social__desc">
                <span>Youtube</span>
                <span>14000 subscribers </span>
              </div>
            </a>
            <a
              href="https://instagram.com"
              target={"blank"}
              className="social__bar instagram"
            >
              <span className="icon">
                <BsInstagram />
              </span>
              <div className="social__desc">
                <span>Instagram</span>
                <span>1400000 follower </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
