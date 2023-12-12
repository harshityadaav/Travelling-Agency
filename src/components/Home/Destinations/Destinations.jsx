import '../../../Style/Home/Destination/Destination.css';
import promo from '../../../assets/Images/Home/Popular Destinations/promo.png';
import p1 from '../../../assets/Images/Home/Popular Destinations/1.png';
import p2 from '../../../assets/Images/Home/Popular Destinations/2.png';
import p3 from '../../../assets/Images/Home/Popular Destinations/3.png';
import p4 from '../../../assets/Images/Home/Popular Destinations/4.png';
import p5 from '../../../assets/Images/Home/Popular Destinations/5.png';
import p6 from '../../../assets/Images/Home/Popular Destinations/6.png';
import p7 from '../../../assets/Images/Home/Popular Destinations/7.png';
import p8 from '../../../assets/Images/Home/Popular Destinations/1.png';
import Reveal, { Fade } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import Slider from 'react-slick';

const Destination = () => {
    const settings = {
        arrows: false,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const settings1 = {
        arrows: false,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        rtl: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const customAnimation = keyframes`
        from { 
            width:0%;    
        }
        to {
         
            width:77%;
        }`

    return <section className='destination_section'>
        <div className='destination_top'>
            <div className='destination_top_left' data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine">
                <div className='heading destination_top_heading'>
                    <b>POPULAR </b> DESTINATION
                </div>
                <Reveal duration={2000} delay={500} keyframes={customAnimation}>{<hr />}</Reveal>
                <p >Nullam ac dolor id nulla finibus pharetra. Sed sed placerat mauris.
                    Pellentesque lacinia imperdiet interdum. Ut nec nulla in purus consequat lobortis.
                    Mauris lobortis a nibh sed convallis.</p>
            </div>
            <div className='destination_top_right' >
                <Fade direction='right'><img src={promo} alt="" className='promo' /></Fade>
            </div>
        </div>
        <div className='destination_bottom'>
            <div>
                <Slider {...settings}>
                    <div className="dslick-carousel-slide">
                        <img src={p1} alt="" />
                        <div className='home_destination_slide_image_caption'> <p >loram ipsum</p></div>
                    </div>
                    <div className="dslick-carousel-slide" >
                        <img src={p2} alt="" />
                        <div className='home_destination_slide_image_caption'> <p >loram ipsum</p></div>
                    </div>
                    <div className="dslick-carousel-slide" >
                        <img src={p3} alt="" />
                        <div className='home_destination_slide_image_caption'> <p >loram ipsum</p></div>
                    </div>
                    <div className="dslick-carousel-slide" >
                        <img src={p4} alt="" />
                        <div className='home_destination_slide_image_caption'> <p >loram ipsum</p></div>
                    </div>
                    <div className="dslick-carousel-slide">
                        <img src={p1} alt="" />
                        <div className='home_destination_slide_image_caption'> <p >loram ipsum</p></div>
                    </div>
                    <div className="dslick-carousel-slide" >
                        <img src={p2} alt="" />
                        <div className='home_destination_slide_image_caption'> <p >loram ipsum</p></div>
                    </div>
                    <div className="dslick-carousel-slide" >
                        <img src={p3} alt="" />
                        <div className='home_destination_slide_image_caption'> <p >loram ipsum</p></div>
                    </div>
                    <div className="dslick-carousel-slide" >
                        <img src={p4} alt="" />
                        <div className='home_destination_slide_image_caption'> <p >loram ipsum</p></div>
                    </div>
                </Slider>
            </div>
            <div>
                <Slider {...settings1}>
                    <div className="dslick-carousel-slide">
                        <img src={p5} alt="" />
                        <p className='home_destination_slide_image_caption'>loram ipsum</p>
                    </div>
                    <div className="dslick-carousel-slide">
                        <img src={p6} alt="" />
                        <p className='home_destination_slide_image_caption'>loram ipsum</p>
                    </div>
                    <div className="dslick-carousel-slide">
                        <img src={p7} alt="" />
                        <p className='home_destination_slide_image_caption'>loram ipsum</p>
                    </div>
                    <div className="dslick-carousel-slide">
                        <img src={p8} alt="" />
                        <p className='home_destination_slide_image_caption'>loram ipsum</p>
                    </div>
                    <div className="dslick-carousel-slide">
                        <img src={p5} alt="" />
                        <p className='home_destination_slide_image_caption'>loram ipsum</p>
                    </div>
                    <div className="dslick-carousel-slide">
                        <img src={p6} alt="" />
                        <p className='home_destination_slide_image_caption'>loram ipsum</p>
                    </div>
                    <div className="dslick-carousel-slide">
                        <img src={p7} alt="" />
                        <p className='home_destination_slide_image_caption'>loram ipsum</p>
                    </div>
                    <div className="dslick-carousel-slide">
                        <img src={p8} alt="" />
                        <p className='home_destination_slide_image_caption'>loram ipsum</p>
                    </div>
                </Slider>
            </div>
        </div>
    </section>
}


export default Destination;