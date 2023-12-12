import '../../../Style/Home/Gallary/Gallary.css';
// import icon from '../../../assets/Images/Home/Gallary/icon.svg';
import gb1 from '../../../assets/Images/Home/Gallary/gb1.png';
import gb2 from '../../../assets/Images/Home/Gallary/gb1.png';
import g1 from '../../../assets/Images/Home/Gallary/g1.png';
import g2 from '../../../assets/Images/Home/Gallary/g2.png';
import g3 from '../../../assets/Images/Home/Gallary/g3.png';
import g4 from '../../../assets/Images/Home/Gallary/g4.png';
import g5 from '../../../assets/Images/Home/Gallary/g5.png';
import g6 from '../../../assets/Images/Home/Gallary/g6.png';
import g7 from '../../../assets/Images/Home/Gallary/g7.png';
import g8 from '../../../assets/Images/Home/Gallary/g1.png';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';


const Gallary = () => {
    const customAnimation = keyframes`
    from { 
        width:1%;    
    }
    to {
        width:99%;
    }`
    return <section className='gallary_section'>
        <div className='gallary_top'>
            <div className='gallary_top_left' >
                <span className='c_secondary' data-aos="fade-right" data-aos-duration='300' data-aos-offset="100" data-aos-easing="ease-in-sine">HAPPY MEMORIES</span>
                <h1 className='heading home_testimonial_top_heading' data-aos="fade-right" data-aos-duration='400' data-aos-offset="100" data-aos-easing="ease-in-sine">
                    <b >PHOTO</b> GALLARY
                </h1>
                <Reveal duration={2000} delay={500} keyframes={customAnimation}>{<hr className='home_testimonial_top_hr' />}</Reveal>
                <p className='c_dark' data-aos="fade-right" data-aos-duration='700' data-aos-offset="100" data-aos-easing="ease-in-sine">
                    Maecenas commodo odio ut vulputate cursus. Integer in egestas lectus.
                    Nam volutpat feugiat mi vitae mollis. Aenean tristique dolor bibendum
                    mi scelerisque ultrices non at lorem.
                </p>
            </div>
        </div>
        <div className='gallary_bottom'>
            <div className='homeGalleryImageContainer big'><img src={gb1} alt="" /></div>
            <div className='homeGalleryImageContainer'><img src={g1} alt="" /></div>
            <div className='homeGalleryImageContainer'><img src={g2} alt="" /></div>
            <div className='homeGalleryImageContainer'><img src={g3} alt="" /></div>
            <div className='homeGalleryImageContainer'><img src={g4} alt="" /></div>
            <div className='homeGalleryImageContainer'><img src={g5} alt="" /></div>
            <div className='homeGalleryImageContainer'><img src={g6} alt="" /></div>
            <div className='homeGalleryImageContainer big'><img src={gb2} alt="" /></div>
            <div className='homeGalleryImageContainer'><img src={g7} alt="" /></div>
            <div className='homeGalleryImageContainer'><img src={g8} alt="" /></div>
        </div>
    </section>
}

export default Gallary