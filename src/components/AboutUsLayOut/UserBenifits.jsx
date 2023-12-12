import React from 'react';
import '../../Style/PageStyle/AboutUsStyle.css';
import first from '../../assets/Images/AboutUsImage/Rectangle 81.svg';
import second from '../../assets/Images/AboutUsImage/Rectangle 82.svg';
import third from '../../assets/Images/AboutUsImage/Rectangle 83.svg';
import Slider from 'react-slick';
import { Fade } from 'react-awesome-reveal';

const UserBenefits = () => {
  const settings = {
    centerMode: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode:false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='user-benefits'>
      <div className='user-benefits-content' data-aos="zoom-in" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
          <h1 className='heading_light c_dark'><b>User <span className='c_secondary'>Benefits</span></b></h1>
          <p className='c_dark user_benefits_heading_para'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
            mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo,
            non suscipit magna interdum eu.
          </p>
      </div>
      <div className='user-benefits-items '>
        <Slider {...settings}>
          <div className="slick-carousel-slide">
            <div className='user-benefits-section'>
              <img src={first} alt='First' />
              <h1 className='card_heading c_dark user_benefits_slider_text' >
                Lorem <span className='c_secondary'>ipsum</span>
              </h1>
              <p className='c_dark user_benefits_slider_text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut e
              </p>
              <button className='read_more_btn'>Read more</button>
            </div>
          </div>
          <div className="slick-carousel-slide">
            <div className='user-benefits-section'>
              <img src={second} alt='First' />
              <h1 className='card_heading c_dark user_benefits_slider_text'>
                Lorem <span className='c_secondary'>ipsum</span>
              </h1>
              <p className='c_dark user_benefits_slider_text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut e
              </p>
              <button className='read_more_btn'>Read more</button>
            </div>
          </div>
          <div className="slick-carousel-slide">
            <div className='user-benefits-section'>
              <img src={third} alt='First' />
              <h1 className='card_heading c_dark user_benefits_slider_text'>
                Lorem <span className='c_secondary'>ipsum</span>
              </h1>
              <p className='c_dark user_benefits_slider_text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut e
              </p>
              <button className='read_more_btn'>Read more</button>
            </div>
          </div>
          <div className="slick-carousel-slide">
            <div className='user-benefits-section'>
              <img src={third} alt='First' />
              <h1 className='card_heading c_dark user_benefits_slider_text'>
                Lorem <span className='c_secondary'>ipsum</span>
              </h1>
              <p className='c_dark user_benefits_slider_text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut e
              </p>
              <button className='read_more_btn'>Read more</button>
            </div>
          </div>
          <div className="slick-carousel-slide">
            <div className='user-benefits-section'>
              <img src={third} alt='First' />
              <h1 className='card_heading c_dark user_benefits_slider_text'>
                Lorem <span className='c_secondary'>ipsum</span>
              </h1>
              <p className='c_dark user_benefits_slider_text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut e
              </p>
              <button className='read_more_btn'>Read more</button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default UserBenefits;