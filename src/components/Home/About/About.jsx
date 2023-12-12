import logo from '../../..//assets/Images/Layout/Header/logo.svg';
import vsource from '../../../assets/Wildlife.mp4';
import '../../../Style/Home/About/About.css';

const About = () => {

    return <section className="about_section" >
        <div className='about_bottom'>
            <div className='about_bottom_left' data-aos="fade-right" data-aos-duration='500' data-aos-offset="100" data-aos-easing="ease-in-sine">
                <h1 className='heading_primary home_about_heading'>ABOUT</h1>
                <div className='home_about_image'><img src={logo} className='header_logo' alt="" /></div>
                <p>Vestibulum tincidunt venenatis scelerisque. Proin quis enim lacinia,
                    vehicula massa et, mollis urna. Proin nibh mauris, blandit vitae convallis
                    at, tincidunt vel tellus. Praesent posuere nec lectus non cursus. Sed
                    commodo odio et ipsum sagittis tincidunt non eget felis.
                </p>
                <h1 className='special_heading'>Andrew McDonald</h1>
            </div>
            <div className='about_bottom_right'>
                <video className='video_player' controls>
                    <source src={vsource} type="video/mp4" />
                    <button>play</button>
                </video>
            </div>
        </div>
    </section>
}

export default About;