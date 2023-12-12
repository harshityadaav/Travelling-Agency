import r1 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 54.jpg';
import r2 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 59.jpg';
import r3 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 55.jpg';
import r4 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 56.jpg';
import r5 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 58.jpg';
import r10 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 62.jpg';
import r11 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 63.jpg';
import r12 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 64.jpg';
import r13 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 65.jpg';
import r14 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 66.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '../../Style/Gallary/Hotels.css';
import { Fade, Zoom } from 'react-awesome-reveal';

const HotelsandResorts = () => {

    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return <section className='resorts_section'>
        <div className='resorts_top'>
            <Fade direction='top' cascade damping={0.2}>
                <h1 className='heading_light c_secondary home_testimonial_top_heading'> <b>Hotels <span className='c_dark'>And Resorts</span></b></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor accusamus et totam consequuntur assumenda labore eaque
                    rem, vero earum qui amet, nobis optio enim rerum quos! Cumque, iure quasi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor accusamus et totam consequuntur assumenda labore eaque
                    rem, vero earum qui amet, nobis optio enim rerum quos! Cumque, iure quasi.
                </p>
            </Fade>
        </div>
        <div className="resorts_middle">
            <div className="grid-item first"><img src={r1} alt="" /></div>
            <div className="grid-item"><img src={r2} alt="" /></div>
            <div className="grid-item"><img src={r3} alt="" /></div>
            <div className="grid-item"><img src={r4} alt="" /></div>
            <div className="grid-item"><img src={r5} alt="" /></div>
            <div className="grid-item first"><img src={r1} alt="" /></div>
            <div className="grid-item"><img src={r2} alt="" /></div>
            <div className="grid-item"><img src={r3} alt="" /></div>
            <div className="grid-item"><img src={r4} alt="" /></div>
            <div className="grid-item"><img src={r5} alt="" /></div>
        </div>


        <div className='resorts_happy_customers'>
            <h1 className='heading_light c_secondary'> <b>Our Happy <span className='c_dark'>Customers</span></b></h1>
        </div>
        <div className='resorts_bottom'>
            <Slider {...settings}>
                <div className='gallary_hotels_slider_div'>
                    <img src={r10} alt="" />
                </div>
                <div className='gallary_hotels_slider_div'>
                    <img src={r11} alt="" />
                </div>
                <div className='gallary_hotels_slider_div'>
                    <img src={r12} alt="" />
                </div>
                <div className='gallary_hotels_slider_div'>
                    <img src={r13} alt="" />
                </div>
                <div className='gallary_hotels_slider_div'>
                    <img src={r14} alt="" />
                </div>
                <div className='gallary_hotels_slider_div'>
                    <img src={r10} alt="" />
                </div>
                <div className='gallary_hotels_slider_div'>
                    <img src={r11} alt="" />
                </div>
                <div className='gallary_hotels_slider_div'>
                    <img src={r12} alt="" />
                </div>
                <div className='gallary_hotels_slider_div'>
                    <img src={r13} alt="" />
                </div>
                <div className='gallary_hotels_slider_div'>
                    <img src={r14} alt="" />
                </div>
            </Slider>
        </div>
    </section>
}

export default HotelsandResorts;