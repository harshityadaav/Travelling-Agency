import '../../../Style/Home/Our Testimonials/OurTestimonials.css';
import u1 from '../../../assets/Images/Home/Testimonial/u1.svg';
import ub1 from '../../../assets/Images/Home/Testimonial/1.svg';
import u2 from '../../../assets/Images/Home/Testimonial/u2.svg';
import ub2 from '../../../assets/Images/Home/Testimonial/2.svg';
import u3 from '../../../assets/Images/Home/Testimonial/u3.svg';
import ub3 from '../../../assets/Images/Home/Testimonial/3.svg';
import Reveal, { Fade } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import TestimonialCard from './TestimonialCard';
import Slider from 'react-slick';

const cards = [{
    backimage: ub1, userimage: u1, fname: 'Nicole', lname: 'Beck',
    stars: '*****', desc: "Suspe blandit orci quis lorem eleifend maximus. Quisque nec."
}, {
    backimage: ub2, userimage: u2, fname: 'Nicole', lname: 'Beck',
    stars: '*****', desc: "Suspe blandit orci quis lorem eleifend maximus. Quisque nec."
}, {
    backimage: ub3, userimage: u3, fname: 'Nicole', lname: 'Beck',
    stars: '*****', desc: "Suspe blandit orci quis lorem eleifend maximus. Quisque nec."
}, {
    backimage: ub1, userimage: u1, fname: 'Nicole', lname: 'Beck',
    stars: '*****', desc: "Suspe blandit orci quis lorem eleifend maximus. Quisque nec."
}, {
    backimage: ub2, userimage: u2, fname: 'Nicole', lname: 'Beck',
    stars: '*****', desc: "Suspe blandit orci quis lorem eleifend maximus. Quisque nec."
}, {
    backimage: ub3, userimage: u3, fname: 'Nicole', lname: 'Beck',
    stars: '*****', desc: "Suspe blandit orci quis lorem eleifend maximus. Quisque nec."
}]

const OurTestimonials = () => {

    const settings = {
        infinite: true,
        arrows: false,
        speed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
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
            width:100%;
        }`
    return <section className='testimonial_section'>
        <div className='testimonial_top' data-aos="fade-right" data-aos-duration='400' data-aos-offset="100" data-aos-easing="ease-in-sine">
            <span className='c_secondary'>
                HAPPY MEMORIES
            </span>
            <h1 className='heading c_primary home_testimonial_top_heading'>
                <b>OUR</b> TESTIMONIALS
            </h1>
            <Reveal duration={2000} delay={500} keyframes={customAnimation}>{<hr className='home_testimonial_top_hr' />}</Reveal>
        </div>
        <div className='testimonial_bottom'>
            <div className='testimonial_carousal'>
                <Slider {...settings}>
                    {cards.map((user, index) => {
                        return <div key={`a${index}`}>
                            <TestimonialCard user={user} />
                        </div>
                    })}
                </Slider>
            </div>
        </div>
    </section>
}

export default OurTestimonials;