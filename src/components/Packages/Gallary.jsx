import '../../Style/Packages/Gallary.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import icon from '../../assets/Images/Shared/Gallary/Vector.jpg';
import { Fade } from 'react-awesome-reveal';

const Gallary = ({ gallaryimgages }) => {
    // const breakpoints = {
    //     768: {
    //         slidesPerView: 3,
    //         spaceBetween: 20,
    //     },
    //     1024: {
    //         slidesPerView: 5,
    //         spaceBetween: 30,
    //     },
    //     480: {
    //         slidesPerView: 1,
    //         modules: [Autoplay],
    //         effect: "none"
    //     },
    //     // Add more breakpoints as needed
    // };

    return <section className='packages_gallary_section'>
        <div className='packages_gallary_top'>
            <div className='packages_gallary_top_left' data-aos="fade-right" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
              
                    <div>
                        <img src={icon} alt="" />
                        <h2 className='c_dark'>Photos</h2>
                    </div>
              
            </div>
            <div className='packages_gallary_top_middle' data-aos="fade-up" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
                <h1 className='heading c_dark home_testimonial_top_heading'><b>Gallary</b></h1>
            </div>
        </div>
        <div className='packages_gallary_bottom'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                slidesPerView={7}
                slide={true}
                centerInsufficientSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                speed={1000}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}


            >
                {gallaryimgages.map((slide, index) => {
                    return <div className='slideContainer'> <SwiperSlide><div className='swiperSlideImage'><img src={slide.image} alt="" /></div></SwiperSlide></div>
                })}
            </Swiper>


        </div>
        <div className='mobile-gallery'>
            {gallaryimgages.map((slide, index) => {
                return <div className='gallery_mobile_img'></div>
            })}
        </div>
    </section>
}

export default Gallary;