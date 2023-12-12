import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../Style/Home/Hero/Hero.css';
import c1 from '../../../assets/Images/Home/Hero/carousel/1.json';
import c2 from '../../../assets/Images/Home/Hero/carousel/2.json';
import c3 from '../../../assets/Images/Home/Hero/carousel/3.json';
import c4 from '../../../assets/Images/Home/Hero/carousel/4.json';
import c5 from '../../../assets/Images/Home/Hero/carousel/5.json';
import { Player } from '@lottiefiles/react-lottie-player';


const Carousel = () => {

    const settings = {
        infinite: true,
        arrows: false,
        // className: "center",
        // centerMode: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slick-carousel-container">
            <Slider {...settings}>
                <div className='home_hero_slider_text'>
                    <Player hover loop src={c1} className="slick_carousel_slide" />
                    <h4 className='c_primary home_hero_carousel_text'>loram  ipsum</h4>
                </div>
                <div className='home_hero_slider_text'>
                    <Player hover loop src={c2} className="slick_carousel_slide" />
                    <h4 className='c_primary home_hero_carousel_text'>loram  ipsum</h4>
                </div>
                <div className='home_hero_slider_text'>
                    <Player hover loop src={c3} className="slick_carousel_slide" />
                    <h4 className='c_primary home_hero_carousel_text'>loram  ipsum</h4>
                </div>
                <div className='home_hero_slider_text'>
                    <Player hover loop src={c4} className="slick_carousel_slide" />
                    <h4 className='c_primary home_hero_carousel_text'>loram  ipsum</h4>
                </div>
                <div className='home_hero_slider_text'>
                    <Player hover loop src={c5} className="slick_carousel_slide" />
                    <h4 className='c_primary home_hero_carousel_text'>loram  ipsum</h4>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
