import React, { useEffect, useState } from "react";
import "./NavUp.scss";
import { BiUpArrowAlt } from "react-icons/bi";
const NavUp = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollUp() {
    window.scrollTo(0, 0);
  }

  return (
    <div
      className={scrollPosition > 200 ? "nav__up" : "nav__up none"}
      onClick={scrollUp}
    >
      <div className="up__icon">
        <BiUpArrowAlt className="icon" />
      </div>
    </div>
  );
};

export default NavUp;
