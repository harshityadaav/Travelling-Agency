import { Fade } from 'react-awesome-reveal';
import '../../Style/Packages/Offerings.css';
import Slider from 'react-slick';

const Offerings = ({ offeringsdata }) => {
    const settings = {
        infinite: true,
        speed: 2500,
        slidesToScroll: 1,
        autoplay: true,
        centreMode: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow:2,
                    autoplaySpeed: 3000,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    autoplaySpeed: 4000,
                },
            },
        ],
    };

    return (
        <section className='packages_offerings_section'>
            <div className='testimonial_top packages_offerings_section_heading' data-aos="fade-up" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
                    <h1 className='heading c_primary home_testimonial_top_heading'>
                        OUR <span className='c_secondary home_testimonial_top_heading'> OFFERINGS</span>{' '}
                    </h1>
            </div>
            <div className='offerings_middle'>
                <div className='offerings_carousal'>
                    <Slider {...settings}>
                        {offeringsdata.map((user, index) => (
                            <div key={index}>{OfferingsCard(user)}</div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className='offerings_bottom'>
                <button className='offerings_button view_more_btn'>View More</button>
            </div>
        </section>
    );
};

export default Offerings;

function OfferingsCard(user) {
    return (
        <div className='offerings_card'>
            <img src={user.offeringssliderimage} className='offerings_card_back' alt='' />
            <h1 className='offerings_card_heading'>{user.heading}</h1>
            <p className='offerings_card_desc'>{user.desc}</p>
            <button className='offerings_button view_more_btn'>View More</button>
        </div>
    );
}
