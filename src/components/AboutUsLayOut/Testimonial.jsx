import React, { useState } from 'react';
import '../../Style/PageStyle/AboutUsStyle.css';
import first from '../../assets/Images/AboutUsImage/Rectangle 86.svg';
import second from '../../assets/Images/AboutUsImage/Ellipse 18.svg';
import third from '../../assets/Images/AboutUsImage/Ellipse 19.svg';
import fourth from '../../assets/Images/AboutUsImage/Ellipse 20.svg';
import Slider from 'react-slick';
import { Fade } from 'react-awesome-reveal';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const settings = {
    infinite: true,
    lazyload: true,
    speed: 500,
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 3,
    autoplay: true,
    beforeChange: (current, next) => setActiveIndex(next),

  };
  const arr = [
    { bimgae: first, image: second, text: '123Lorem ipsum dolor sit amet,  hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magnainterdum eu.' },
    { bimgae: second, image: third, text: '456Lorem ipsum dolor sit amet,  hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magnainterdum eu.' },
    { bimgae: first, image: fourth, text: '789Lorem ipsum dolor sit amet,  hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magnainterdum eu.' },
    { bimgae: first, image: second, text: '101112Lorem ipsum dolor sit amet,  hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magnainterdum eu.' },
    { bimgae: first, image: third, text: '131415Lorem ipsum dolor sit amet,  hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magnainterdum eu.' },
    { bimgae: first, image: fourth, text: '16171819Lorem ipsum dolor sit amet,  hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magnainterdum eu.' },
  ]
  return (
    <div className='testimonial'>

      <div className='testimonial-image'>
        <Fade direction='left'><img src={arr[activeIndex].bimgae} alt='Testimonial' /></Fade>
      </div>

      <div className='testimonial-content'>
        <div className='testimonial_content_details' data-aos="fade-left" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">

          <p className='testimonial-says'>What people say</p>
          <h1 className='testimonial-heading'>Testimonial</h1>
          <h1 className='quotation-mark'>“</h1>

        </div>

          <p className='testimonial-text' data-aos="fade-left" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
            {arr[activeIndex].text}
          </p>
 
        <div className='Tslidercomponent'>
          <div className='Tslider-container'>
            <Slider {...settings}>
              {arr.map((item, index) => (
                <div className={index === activeIndex ? "Tslider-item active-slider-item" : "Tslider-item"} key={`b${index}`}>
                  <div className='Tinnervisible-slide'>
                    <div><img src={item.image} alt="" /></div>
                    <h3 className='testimonial-author'>Sharukh Khan</h3>
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

export default Testimonial;