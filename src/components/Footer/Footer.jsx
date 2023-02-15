import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__newsletter">newsletter</div>
      <nav className="footer__nav">
        <div className="footer__nav__links">
          <div className="links">
            <Link to={"/Clean-Energy"}>CLEAN ENERGY</Link>
          </div>
          <div className="links">
            <h3>STRATEGIC PLATFORMS</h3>
            <Link to={"/ADSW"}>ADSW</Link>
            <Link to={"/ZSP"}>ZSP</Link>
            <Link to={"/WiSER"}>WiSER</Link>
            <Link to={"/Youth"}>Youth</Link>
          </div>
          <div className="links">
            <h3>TOPIC</h3>
            <Link to={"/Projects"}>Projects</Link>
            <Link to={"/Partnership"}>Partnership</Link>
            <Link to={"/Innovation"}>Innovation</Link>
            <Link to={"/Insights"}>Insigths</Link>
            <Link to={"/Awards"}>Awards</Link>
            <Link to={"/Investments"}>Investments</Link>
            <Link to={"/Destination"}>Destination</Link>
            <Link to={"/Catalyst"}>Catalyst</Link>
            <Link to={"/Reports"}>Reports</Link>
            <Link to={"/Vip-Visits"}>VIP Visits</Link>
          </div>
          <div className="links">
            <h3>MEDIA</h3>
            <Link to={"/In-The-Media"}>In the Media</Link>
            <Link to={"/Press-Release"}>Press Release</Link>
            <Link to={"/News-Letter"}>News Letter</Link>
          </div>
          <div className="links">
            <h3>OTHERS</h3>
            <Link to={"/Tech-Trends"}>Tech Trends</Link>
            <Link to={"/Events"}>Events</Link>
            <Link to={"/Social-Media"}>Social Media</Link>
          </div>
          <div className="links">
            <Link to={"/Contact-Us"}>CONTACT US</Link>
            <Link to={"/Term-And-Conditions"}>TERM AND CONDITIONS</Link>
            <Link to={"/Site-Map"}>SITEMAP</Link>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
