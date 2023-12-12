// import { Fade } from 'react-awesome-reveal';
import play from '../../assets/Images/Gallary/Hero/play.svg';
import '../../Style/Gallary/Hero.css';
import vsource1 from '../../assets/Wildlife1.mp4';
import vsource2 from '../../assets/Wildlife2.mp4';
import { useRef } from 'react';

const Hero = () => {
    const playpause = useRef();
    const playpause1 = useRef();
    const playpause2 = useRef();

    const playvideo = (e) => {
        e.preventDefault();
        playpause2.current.style.visibility = 'hidden';
        playpause1.current.style.visibility = 'visible';
        playpause2.current.pause();
        playpause.current.src = vsource1;
        playpause1.current.src = vsource1;
        playpause.current.play();
        playpause1.current.play();
    }

    const playvideo1 = (e) => {
        e.preventDefault();
        playpause1.current.style.visibility = 'hidden';
        playpause2.current.style.visibility = 'visible';
        playpause1.current.pause();
        playpause.current.src = vsource2;
        playpause2.current.src = vsource2;
        playpause.current.play();
        playpause2.current.play();
    }

    return (
        <section className='gallary_hero_section'>
            <video className='gallary_video_player' autoPlay muted loop ref={playpause}>
                <source src={vsource1} type="video/mp4" />
            </video>
            <div className='gallary_hero_container'>
                <div className='gallary_hero_left'>
                        <h1 className='heading_primary home_testimonial_top_heading'><b>Gallary</b></h1>
                        <p className='c_primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat praesentium excepturi
                            nulla maxime, tenetur, sed illo harum qui rem reiciendis adipisci voluptatibus facere eos
                            consectetur, et dolor vel  cum quos.
                        </p>
                </div>
                <div className='gallary_hero_right'>
                 
                        <div className='gallary_hero_video_player1'>
                            <img src={play} alt="" onClick={playvideo} />
                            <h1 className='heading_light c_primary'> loram ipsum</h1>
                            <p className='c_primary'>loram ipsum</p>
                            <video className='gallary_hero_video_player_first' loop autoPlay muted ref={playpause1}>
                                <source src={vsource1} type="video/mp4" />
                            </video>
                        </div>
                        <div className='gallary_hero_video_player2'>
                            <img src={play} alt="" onClick={playvideo1} />
                            <h1 className='heading_light c_primary'> loram ipsum</h1>
                            <p className='c_primary'>loram ipsum</p>
                            <video className='gallary_hero_video_player_second' loop ref={playpause2}>
                                <source src={vsource2} type="video/mp4" />
                            </video>
                        </div>
                 
                </div>
            </div>
        </section>
    );
}

export default Hero;