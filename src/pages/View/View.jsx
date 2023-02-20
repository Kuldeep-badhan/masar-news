import React from "react";
import data from "../../assets/data/data.js";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Card from "../../components/Card/Card.jsx";

import "./View.scss";
import { useParams } from "react-router-dom";
const View = () => {
  const id = useParams().id;
  return (
    <div className="view container">
      {data
        .filter((item) => item.id == id)
        .map((mapItem) => {
          return (
            <>
              <div className="view__header">
                <span>Masdar News</span>
                <MdOutlineArrowForwardIos className="view__icon" />
                <span>{mapItem.tag}</span>
                <MdOutlineArrowForwardIos className="view__icon" />
                <span>{mapItem.heading}</span>
              </div>
              <div className="view__body">
                <div className="left">
                  <div className="top">
                    <h5>{mapItem.heading}</h5>
                    <p>
                      {" "}
                      <span>Publishing Date</span> {mapItem.date}{" "}
                    </p>
                    <p>
                      <span>Topic</span> {mapItem.topic}{" "}
                    </p>
                  </div>
                  <div className="bottom">
                    <div className="topic__image">
                      <img src={mapItem.imgSrc} alt="topic image" />
                    </div>
                    <div className="topic__desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum aperiam facilis a corporis suscipit pariatur
                      officiis. Eaque impedit non fugiat dolores accusantium
                      perspiciatis distinctio cupiditate. Distinctio enim
                      dolorum numquam corrupti aspernatur sed recusandae,
                      voluptatem dolorem, repudiandae repellendus voluptatum
                      nesciunt consectetur. Aut maxime neque magnam quis, rem
                      eius eum molestias ipsa impedit fuga! Non ducimus sit ipsa
                      recusandae eius laborum quasi dolore nihil cumque
                      explicabo, vitae, laboriosam, voluptatum corporis
                      provident ipsum odit aperiam voluptatem. Similique,
                      exercitationem consequuntur? Vitae ad explicabo facere
                      repudiandae dicta dolore deserunt itaque quis ducimus
                      recusandae debitis exercitationem nesciunt ea magnam
                      aliquid aliquam, laudantium, fugit qui in consequuntur
                      unde. Nisi sint beatae velit dolorem alias perspiciatis.
                      Vel, temporibus et nemo ad laudantium autem ipsum
                      accusamus voluptatum assumenda iusto tempora possimus,
                      sapiente enim suscipit natus cupiditate? Sit, dignissimos,
                      iusto qui dolore deleniti sunt ea, cupiditate praesentium
                      alias soluta maiores! Molestias ad, eveniet velit quae
                      fugit expedita alias rem? Animi consequatur facere
                      molestias deleniti vel a magni nesciunt totam deserunt
                      dolore obcaecati recusandae pariatur quam assumenda libero
                      non ducimus quibusdam, consequuntur voluptas omnis quos
                      laboriosam. Eveniet laborum dolore natus animi odio.
                      Voluptatum excepturi illo veritatis tempore fuga sapiente
                      hic facilis distinctio nulla quis placeat omnis quaerat
                      incidunt accusamus, amet similique harum maxime mollitia,
                      ut porro, recusandae obcaecati! Blanditiis placeat
                      suscipit voluptatem harum omnis! Deleniti temporibus
                      maxime veritatis voluptatibus architecto eius, labore,
                      saepe repellat reprehenderit laborum ad repudiandae natus
                      omnis porro eaque minima hic quis? Ad quibusdam
                      consequuntur at nemo deserunt ratione? Illum aut quae, est
                      unde explicabo voluptatibus repudiandae numquam aspernatur
                      facere voluptas odio porro dicta atque excepturi veniam
                      asperiores tenetur. Vel, dolore neque? Sint asperiores sed
                      qui magni cum at iusto iure itaque? Dolorem voluptatibus
                      quisquam et porro mollitia, laudantium dignissimos
                      molestias! Sed, mollitia? Consequuntur natus odit aliquid
                      dignissimos necessitatibus incidunt consequatur aperiam
                      reprehenderit non, ipsam ab placeat architecto, blanditiis
                      quasi facilis atque, eos laboriosam neque facere totam
                      veniam. Eius sunt ex illum deserunt voluptate maxime
                      excepturi possimus ipsam.
                    </div>
                  </div>
                </div>
                <div className="right">
                  <strong>Similar Articles</strong>
                  <div className="view__cards">
                    {data
                      .filter(
                        (item) =>
                          item.tag == mapItem.tag && item.id !== mapItem.id
                      )
                      .map((item, index) => {
                        return (
                          <Card
                            key={index + 1}
                            tag={item.tag}
                            imgSrc={item.imgSrc}
                            heading={item.heading.substring(0, 20) + "..."}
                            redirectUrl={item.url}
                          />
                        );
                      })}
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default View;
