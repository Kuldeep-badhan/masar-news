import React from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Card2.scss";
const ImageSlider = ({ imagesArray, cardLoc, cardSetter }) => {
  return (
    <div className="image__slider custom__card2">
      <Swiper
        style={{
          height: "100%",
        }}
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {imagesArray.map((item) => {
          return (
            <SwiperSlide>
              <Link
                to={item.url}
                className="slide"
                style={{
                  backgroundImage: `url(${item.imgSrc})`,
                }}
              >
                <h2>{item.heading.substring(0, 40) + "..."}</h2>
                <small>{item.tag}</small>
                <p>{item.desc.substring(0, 80) + "..."}</p>
                <div className="hover_transition"></div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
