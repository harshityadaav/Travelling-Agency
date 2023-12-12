import React, { useState } from "react";
import "../../Style/PageStyle/AboutUsStyle.css";
import first from "../../assets/Images/AboutUsImage/Ellipse 14.svg";
import second from "../../assets/Images/AboutUsImage/Ellipse 15.svg";
import third from "../../assets/Images/AboutUsImage/Ellipse 16.svg";
import fourth from "../../assets/Images/AboutUsImage/Ellipse 17.svg";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";

const teamMembers = [
  { id: 1, name: "Gaurav Joshi", role: "UI UX Designer", img: first },
  { id: 2, name: "Second Member", role: "UI UX Designer", img: second },
  { id: 3, name: "Third Member", role: "UI UX Designer", img: third },
  { id: 4, name: "Fourth Member", role: "UI UX Designer", img: fourth },
  { id: 5, name: "Fifth Member", role: "UI UX Designer", img: second },
  { id: 6, name: "Sixth Member", role: "UI UX Designer", img: third },
];

const TeamIntroduction = () => {
  const [activeIndex, setActiveIndex] = useState()
  const settings = {
    infinite: true,
    lazyload: true,
    speed: 500,
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 5,
    autoplay: true,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => setActiveIndex(next),

  };


  return (
    <div className="about-team">
      <div className="teamintroduction">
        <div className="intro-content" data-aos="zoom-in" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
          <h1 className="heading_light c_dark">
            <b> Team <span className="c_secondary">Introduction</span></b>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
            massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
            mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare
            leo, non suscipit magna interdum eu.
          </p>

        </div>

        <div className='Tislidercomponent'>
          <div className='Tislider-container'>
            <Slider {...settings}>
              {teamMembers.map((member, index) => (
                <div className={index === activeIndex ? "Tislider-item tiactive-slider-item" : "Tislider-item"} key={`a${index}`}>
                  <div className='Tiinnervisible-slide'>
                    <div className="intro-profile" key={member.id}>
                      <img src={member.img} alt={member.name} />
                      <h1 className="about_team_card_details heading_light c_dark">
                        <span className="c_secondary">{member.name.split(" ")[0]}</span> {member.name.split(" ")[1]}
                      </h1>
                      <h5 className="role about_team_card_details c_dark">{member.role}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeamIntroduction;