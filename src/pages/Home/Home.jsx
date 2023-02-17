import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import shekh from "../../assets/homeImg/shekh.jpeg";
import Card from "../../components/Card/Card";
import img from "../../assets/images/img-8.jpg";
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
            <h3>Connect with us</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
