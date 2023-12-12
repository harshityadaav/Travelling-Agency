import '../../../Style/Home/Blog/Blog.css';
import b1 from '../../../assets/Images/Home/Blog/1.png';
import b2 from '../../../assets/Images/Home/Blog/2.png';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

const Blog = () => {
    const customAnimation = keyframes`
        from { 
            width:0%;    
        }
        to {
            width:77%;
        }`
    return <section className='blog_section'>
        <div className='blog_top'>
            <div className='blog_top_left'>
                <span className='c_secondary' data-aos="fade-right" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
                    LATEST NEWS
                </span>
                <h1 data-aos="fade-right" data-aos-duration='500' data-aos-offset="400" data-aos-easing="ease-in-sine" className='heading c_primary home_testimonial_top_heading'>
                    <b>OUR</b> BLOGS
                </h1>
                <Reveal duration={2000} delay={500} keyframes={customAnimation}>{<hr />}</Reveal>
                <p className='c_primary' data-aos="fade-right" data-aos-duration='900' data-aos-offset="400" data-aos-easing="ease-in-sine">
                    Maecenas commodo odio ut vulputate cursus. Integer in egestas lectus.
                    Nam volutpat feugiat mi vitae mollis. Aenean tristique dolor bibendum
                    mi scelerisque ultrices non at lorem.
                </p>
            </div>
        </div>
        <div className='blog_bottom'>
            <div className='blog_card' data-aos="zoom-in" data-aos-duration='300' data-aos-offset="500" data-aos-easing="ease-in-sine">
                <div className='blog_card_left'>
                    <div className='blog_card_img'>
                        <img src={b1} alt="" />
                        <div className='linear'></div>
                    </div>
                </div>
                <div className='blog_card_right'>
                    <div>
                        <div className='card_heading home_blog_card_heading'>SED SEMPER LECUS ET ENIM SODALES</div>
                        <div className='home_blog_card_details'>Mon, 03-23-2016</div>
                        <p className='home_blog_card_details'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            illum mollitia numquam exercitationem repellendus quam?</p>
                    </div>
                    <div className='card_heading_secondary read_more_btn'>Read More</div>
                </div>
            </div>
            <div className='blog_card' data-aos="zoom-in" data-aos-duration='600' data-aos-offset="500" data-aos-easing="ease-in-sine">
                <div className='blog_card_left'>
                    <div className='blog_card_img'><img src={b2} alt="" />
                        <div className='linear'></div>
                    </div>
                </div>
                <div className='blog_card_right'>
                    <div>
                        <div className='card_heading home_blog_card_heading'>SED SEMPER LECUS ET ENIM SODALES</div>
                        <div className='home_blog_card_details'>Mon, 03-23-2016</div>
                        <p className='home_blog_card_details'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            illum mollitia numquam exercitationem repellendus quam?</p>
                    </div>
                    <div className='card_heading_secondary read_more_btn'>Read More</div>
                </div>
            </div>
        </div>
    </section>
}

export default Blog;