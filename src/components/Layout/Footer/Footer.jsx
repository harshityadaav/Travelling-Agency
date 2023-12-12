import { useRef, useState } from 'react';
import '../../../Style/Layout/Footer/Footer.css';
import ps from '../../../assets/Images/Layout/Footer/ps.svg';
import face from '../../../assets/Images/Layout/Footer/face.svg';
import you from '../../../assets/Images/Layout/Footer/you.svg';
import insta from '../../../assets/Images/Layout/Footer/insta.svg';
import webreate from '../../../assets/Images/Layout/Footer/webreate.svg'
import { Fade, Zoom } from 'react-awesome-reveal';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const email = useRef();
    const [show, setshow] = useState(false);

    const emailHandler = (e) => {
        e.preventDefault();
        // console.log(email.current.value)
    }

    const setsubmithandler = (e) => {
        e.preventDefault();
        if (email.current.value) {
            setshow(true)
        } else {
            setshow(false)
        }
    }
    return <section className='footer_section'>
        <div className='footer_top'>
            <div className='footer_top_left'>
                <Fade direction="left">
                    <span>SUBSCRIBE TODAY</span>
                    <div style={{color:"var(--primary)"}}className='heading_primary c_primary'>GET LATEST OFFERS</div>
                </Fade>
            </div>
            <form className='footer_top_right' onSubmit={emailHandler}>
                <input type="email" placeholder='Enter Your Email' onChange={setsubmithandler} className='input' ref={email} />
                {show && <button type='submit'>Submit</button>}
            </form>
        </div>
        <div className='footer_middle'>
            <div className='footer_middle_top'>
                <Zoom> <img src={ps} alt="" /></Zoom>
            </div>
            <div className='footer_middle_middle'>
                <Fade direction='left'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about-us'>About Us</NavLink>
                    <NavLink to='/packages'>Packages</NavLink>
                </Fade>
                <Fade direction='right'>
                    <NavLink to='/contact'>Contact Us</NavLink>
                    <NavLink to='/privacy-policy'>Privacy Policy</NavLink>
                    <NavLink to='/gallery'>Gallery</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                </Fade>
            </div>
            <div className='footer_middle_bottom'>
                <Zoom cascade damping={0.3}>
                    <img src={face} alt="" />
                    <img src={you} alt="" />
                    <img src={insta} alt="" />
                </Zoom>
            </div>
        </div>
        <div className='footer_bottom'>
            <div className='copyright'>C</div>
            <div>Copyright PrabhuSeva Powered by</div>
            <img src={webreate} alt="" />
        </div>
    </section>
}

export default Footer