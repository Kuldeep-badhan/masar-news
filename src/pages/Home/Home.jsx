import React from "react";
import { Link } from "react-router-dom";
import {
  BsArrowRight,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import shekh from "../../assets/homeImg/shekh.jpeg";
import Card from "../../components/Card/Card";
import img from "../../assets/images/img-8.jpg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Home.scss";
const Home = () => {
  const dummyData = [
    {
      heading: "heading",
      desc: "description",
      imgSrc: shekh,
      tag: "corporate",
    },
  ];
  const dummyData2 = [
    {
      heading: "heading",
      desc: "description",
      imgSrc: shekh,
      tag: "corporate",
    },
    {
      heading: "heading",
      desc: "description",
      imgSrc: shekh,
      tag: "corporate",
    },
    {
      heading: "heading",
      desc: "description",
      imgSrc: shekh,
      tag: "corporate",
    },
    {
      heading: "heading",
      desc: "description",
      imgSrc: shekh,
      tag: "corporate",
    },
  ];
  const dummyData3 = [
    {
      heading: "heading",
      desc: "description",
      imgSrc: shekh,
      tag: "corporate",
    },
    {
      heading: "heading",
      desc: "description",
      imgSrc: shekh,
      tag: "corporate",
    },
    {
      heading: "heading",
      desc: "description",
      imgSrc: shekh,
      tag: "corporate",
    },
  ];

  return (
    <div className="home container">
      <div className="home__top">
        <div className="home__top--left">
          {" "}
          {dummyData.map((item, index) => {
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
          {dummyData2.map((item, index) => {
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
          <img src={img} alt="image" />
          <div className="choice__desc">
            <p>Lorem ipsum dolor sit amet </p>
            <span>INSIGHTS</span>
          </div>
        </div>
        <div className="choice">
          <img src={img} alt="image" />
          <div className="choice__desc">
            <p>Lorem ipsum dolor sit amet </p>
            <span>INSIGHTS</span>
          </div>
        </div>
        <div className="choice">
          <img src={img} alt="image" />
          <div className="choice__desc">
            <p>Lorem ipsum dolor sit amet </p>
            <span>INSIGHTS</span>
          </div>
        </div>
        <div className="choice">
          <img src={img} alt="image" />
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
          {dummyData2.map((item, index) => {
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
            {dummyData3.map((item, index) => {
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
            {dummyData.map((item, index) => {
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
          {dummyData3.map((item, index) => {
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
