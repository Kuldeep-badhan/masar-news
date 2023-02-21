import React from "react";
import { Link } from "react-router-dom";
import {
  BsArrowRight,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import shekh from "../../assets/homeImg/shekh.jpeg";
import shekh2 from "../../assets/homeImg/shekh2.jpg";
import shekh3 from "../../assets/homeImg/shekh3.jpg";
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
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Home.scss";
const Home = () => {
  const home = [
    {
      id: 1,
      heading:
        "The UAE and France agree to form bilateral partnership to focus on the decarbonization of hard-to-abate (HTA) industries",
      desc: "His Excellency Dr Sultan Ahmed Al Jaber, UAE Minister of Industry and Advanced Technology, President-Designate for COP28, and Chairman of Masdar, yesterday conferred with His Excellency Bruno Le Maire, Minister of the Economy, Finance, and Industrial and Digital Sovereignty, as part of the French Minister’s visit to the United Arab Emirates.",
      imgSrc: shekh,
      date: " 31 Jan 2023",
      topic: " Corporate, Clean Energy, Projects, Partnership, Sultan Al Jaber",
      tag: "Corporate",
      url: "/Corporate/1",
    },
    {
      id: 17,
      heading:
        "Masdar Signs Agreement to Explore Exporting Green Hydrogen from Abu Dhabi to EuropeThe UAE and France agree to form bilateral partnership to focus on the decarbonization of hard-to-abate (HTA) industries",
      desc: "Masdar, one of the world’s leading clean energy companies, Port of Amsterdam, SkyNRG, Evos Amsterdam and Zenith Energy have signed a memorandum of understanding (MoU) to explore the development of a green hydrogen supply chain between Abu Dhabi and Amsterdam to support Dutch and European markets. ",
      imgSrc: shekh2,
      tag: "Clean Energy",
      topic: "Clean Energy, Projects, Sultan Al Jaber",
      date: " 13 Jan 2023",
      url: "/Clean-Energy/17",
    },
    {
      id: 18,
      heading:
        "Masdar film shows London Array’s impact on British coastal community",
      desc: "Masdar’s London Array, one of the world’s largest wind farms, has been helping to power half a million British homes, create jobs, and cut carbon emissions. The offshore facility has brought jobs to Britain’s north Kent coast. It has also helped to shrink the UK’s carbon footprint by generating 630 megawatts (MW) of renewable energy and, displacing 925,000 tonnes of carbon dioxide per year. ",
      imgSrc: shekh3,
      tag: "Clean Energy",
      topic: " Clean Energy, Power to change",
      date: "  03 Jan 2023",
      url: "/Clean-Energy/18",
    },
  ];
  const techtrendsarr = [
    {
      id: 2,
      heading:
        "Abu Dhabi’s Department of Energy to support Abu Dhabi Sustainability Week as Principal Partner",
      desc: "description",
      imgSrc: techtrends,
      date: " 07 Jan 2021",
      topic: " ADSW, Strategic Platforms",
      tag: "Tech Trends",
      url: "/Tech-Trends/2",
    },
  ];
  const homeg = [
    {
      heading:
        "Abu Dhabi Sustainability Week 2023 Successfully Concludes Setting UAE on Road to COP28",
      id: 3,
      desc: "description",
      imgSrc: home1,
      tag: "ADSW",
      topic: " ADSW, Strategic Platforms, Sultan Al Jaber",
      date: " 24 Jan 2023",
      url: "/ADSW/3",
    },
    {
      id: 4,
      heading:
        "Masdar to Develop 5 GW of Renewable Energy Projects to Advance Africa’s Clean Energy Objectives",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime laudantium! Laboriosam illum nihil aliquid veritatis rerum vero ea, velit asperiores iusto deleniti nulla?  ",
      imgSrc: home2,
      tag: "Clean Energy",
      url: "/Clean-Energy/4",
    },
    {
      id: 5,
      heading:
        "Masdar and DEWA Commit to Support UAE Sustainability Objectives with Partnership Agreement for ADSW and WETEX",
      desc: "description",
      date: " 18 Jan 2023",
      imgSrc: home3,
      tag: " ADSW",
      topic: " ADSW",
      url: "/ADSW/5",
    },
    {
      id: 6,
      heading:
        "Masdar Signs Agreement to Develop Clean Energy Projects in Kyrgyzstan with 1 GW Capacity",
      date: " 10 Jan 2023",
      desc: "description",
      imgSrc: home4,
      tag: "Clean Energy",
      topic: "Projects",
      url: "/Clean-Energy/6",
    },
  ];
  const clean = [
    {
      id: 7,
      heading:
        "Masdar and IFC Agree to Explore Ways to Advance Climate Action in Emerging Markets",
      desc: "description",
      imgSrc: clean1,
      tag: "Clean Energy",
      topic: "Clean Energy, Projects",
      date: " 14 Feb 2023",
      url: "/Clean-Energy/7",
    },
    {
      id: 8,
      heading:
        "Masdar Opens Office in Azerbaijan to Support Nation’s Clean Energy Objectives",
      desc: "description",
      date: " 06 Feb 2023",
      topic: " Clean Energy, Corporate",
      imgSrc: clean2,
      url: "/Clean-Energy/8",

      tag: "Clean Energy",
    },
    {
      id: 9,
      heading:
        "Emerge Partners with Coca-Cola Al Ahlia Beverages’ on new Solar Project",
      desc: "description",
      topic: " Clean Energy, Projects, Partnership",
      date: " 26 Jan 2023",
      url: "/Clean-Energy/9",
      imgSrc: clean3,
      tag: "Clean Energy",
    },
    {
      id: 10,
      heading:
        "Masdar, TotalEnergies, Siemens Energy and Marubeni to certify a novel pathway to make Sustainable Aviation Fuel (SAF) from methano",
      desc: "description",
      date: "25 Jan 2023",
      topic: " Clean Energy, Partnership, Projects",
      imgSrc: clean4,
      url: "/Clean-Energy/10",
      tag: "Clean Energy",
    },
  ];
  const strategy = [
    {
      id: 11,
      heading:
        "Masdar’s WiSER Annual Forum Explores Plans to Boost Women’s Leadership in Climate Adaptation at ADSW 2023",
      desc: "description",
      imgSrc: strategy1,
      date: "19 Jan 2023",
      topic: " Strategic Platforms, WiSER",
      url: "/Strategic-Platform/11",
      tag: "Strategic Platforms",
    },
    {
      id: 12,
      heading:
        "Abu Dhabi Sustainability Week 2023 to Set Agenda for Inclusive Climate Action",
      date: " 23 Dec 2022",
      topic: " Strategic Platforms, ADSW",
      url: "/Strategic-Platform/12",
      desc: "description",
      imgSrc: strategy2,
      tag: "Strategic Platforms",
    },
    {
      id: 13,
      heading:
        "Masdar Champions Women at Forefront of Global Net-Zero Transition at COP27",
      topic: "Strategic Platforms, WiSER",
      date: " 18 Nov 2022",
      url: "/Strategic-Platform/13",
      desc: "description",
      imgSrc: strategy3,
      tag: "Strategic Platforms",
    },
  ];
  const intheMedia = [
    {
      id: 14,
      heading:
        "Etihad Airways flies the world’s first flight using fuel made in the UAE from plants",
      url: "https://www.traveldailynews.com/regional-news/etihad-airways-flies-the-worlds-first-flight-using-fuel-made-in-the-uae-from-plants/",

      imgSrc: inthemedia1,
      tag: "In The Media",
    },
    {
      id: 15,
      heading: "Weekly renewables M&A round-up (Jan 14-20)",
      url: "https://www.traveldailynews.com/regional-news/etihad-airways-flies-the-worlds-first-flight-using-fuel-made-in-the-uae-from-plants/",
      imgSrc: inthemedia2,
      tag: "In The Media",
    },
    {
      id: 2,
      heading:
        "Abu Dhabi’s Department of Energy to support Abu Dhabi Sustainability Week as Principal Partner",
      desc: "description",
      imgSrc: techtrends,
      date: " 07 Jan 2021",
      topic: " ADSW, Strategic Platforms",
      tag: "Tech Trends",
      url: "/Tech-Trends/2",
    },
  ];

  return (
    <div className="home container">
      <div className="home__top">
        <div className="home__top--left">
          <ImageSlider imagesArray={home} />
        </div>
        <div className="home__top--right">
          {homeg.map((item, index) => {
            return (
              <Card
                key={item.id}
                heading={item.heading.substring(0, 30) + "..."}
                imgSrc={item.imgSrc}
                tag={item.tag}
                redirectUrl={item.url}
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
                  key={item.id}
                  heading={item.heading.substring(0, 30) + "..."}
                  imgSrc={item.imgSrc}
                  tag={item.tag}
                  redirectUrl={item.url}
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
                    key={item.id}
                    heading={item.heading.substring(0, 30) + "..."}
                    imgSrc={item.imgSrc}
                    tag={item.tag}
                    redirectUrl={item.url}
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
                    key={item.id}
                    heading={item.heading.substring(0, 30) + "..."}
                    imgSrc={item.imgSrc}
                    tag={item.tag}
                    redirectUrl={item.url}
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
                  key={item.id}
                  heading={item.heading.substring(0, 30) + "..."}
                  imgSrc={item.imgSrc}
                  redirectUrl={item.url}
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
