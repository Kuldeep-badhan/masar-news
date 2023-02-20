import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact container">
      <div className="contact__header">
        <div className="contact__header--page">
          <span>Masdar News</span>
          <MdOutlineArrowForwardIos className="forward__icon" />
          <span>Contact</span>
        </div>
        <div className="contact__header--bar">
          <h2>Contact</h2>
        </div>
      </div>
      <div className="contact__body">
        <p>
          The media relations team is happy to assist journalists covering
          Masdar. Please contact us for more background on particular stories,
          to arrange interviews, or for information about visiting Masdar City.
        </p>
        <p>Please send your media enquiries to: press@masdar.ae</p>
      </div>
    </div>
  );
};

export default Contact;
