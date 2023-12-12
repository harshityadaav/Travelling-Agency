import { useState } from 'react';
import '../../Style/Packages/Hero.css';
import Slider from 'react-slick';
import { Fade } from 'react-awesome-reveal';

const Hero = ({ herodata }) => {

    const [activeIndex, setActiveIndex] = useState()
    const settings = {
        infinite: true,
        lazyload: true,
        speed: 1500,
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        // autoplaySpeed: 1500,
        autoplay: true,
        beforeChange: (current, next) => setActiveIndex(next),
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3,
                    autoplaySpeed: 4000,
                },
            },
        ],

    };
    const arr = [
        { image: herodata.image.heroslider1, heading: herodata.sliderheading1 },
        { image: herodata.image.heroslider2, heading: herodata.sliderheading2 },
        { image: herodata.image.heroslider3, heading: herodata.sliderheading3 },
        { image: herodata.image.heroslider1, heading: herodata.sliderheading1 },
        { image: herodata.image.heroslider2, heading: herodata.sliderheading2 },
        { image: herodata.image.heroslider3, heading: herodata.sliderheading3 },
    ]
    return <section className='packages_hero_section'>
        <div className='packages_hero_left' >
           
                <h1 className='yellow_heading'>{herodata.heading}</h1>
                <p className='c_primary'>
                    {herodata.text}
                </p>
         
        </div>
        <div className='packages_hero_right'>
            <div className='packagesheroslidercomponent'>
                <div className='packagesheroslider-container'>
                    <Slider {...settings}>
                        {arr.map((item, index) => (
                            <div className={index === activeIndex ? "phslider-item phactive-slider-item" : "phslider-item"}>
                                <div className='phinnervisible-slide'>
                                    <img src={item.image} alt="" />
                                    <h1 id={index === activeIndex ? "phshvisible" : "phshhidden"} className='heading c_primary'>
                                        {item.heading}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    </section>
}

export default Hero;