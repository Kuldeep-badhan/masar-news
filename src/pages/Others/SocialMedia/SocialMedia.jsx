import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaCentercode, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {
  BsArrowRight,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import "./SocialMedia.scss";
const SocialMedia = () => {
  return (
    <div className="social__media container">
      <div className="social__media__header">
        <div className="social__media__header--page">
          <span>Masdar News</span>
          <MdOutlineArrowForwardIos className="forward__icon" />
          <span>Social Media</span>
        </div>
        <div className="social__media__header--bar">
          <h2>Social Media</h2>
          <p>Explore Masdar activities through our social hub </p>
        </div>
      </div>
      <div className="social__media__body">
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
          <div className="social__card--header facebook">
            <div className="icon">
              {" "}
              <FaFacebookF />{" "}
            </div>
            <p>View on Facebook</p>
          </div>
          <div className="social__card--body">Facebook</div>
        </div>
        <div className="social__card ">
          <div className="social__card--header linkedin">
            <div className="icon">
              {" "}
              <FaLinkedinIn />{" "}
            </div>
            <p>view on LinkedIn</p>
          </div>
          <div className="social__card--body">LinkedIn</div>
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
  );
};

export default SocialMedia;
