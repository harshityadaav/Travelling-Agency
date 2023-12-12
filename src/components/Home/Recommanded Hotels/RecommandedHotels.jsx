import Reveal from 'react-awesome-reveal';
import '../../../Style/Home/Recommanded Hotels/RecommandedHotels.css'
import { keyframes } from '@emotion/react';

const RecommandedHotels = () => {
    const customAnimation = keyframes`
    from { 
        width:0%;    
    }
    to {
        margin-bottom:1rem;
        width:100%;
    }`
    return <section className='hotels_section'>
        <div className='hotels_top'>
            <div className='hotels_top_left'>
                <h1 className='heading c_primary hotels_recommanded_heading'
                    data-aos="fade-right" data-aos-duration='400' data-aos-offset="100" data-aos-easing="ease-in-sine">
                    <span> <b>RECOMMENDED</b></span> HOTELS
                </h1>
                <Reveal duration={2000} delay={500} keyframes={customAnimation}>{<hr />}</Reveal>
                <p data-aos="fade-right" data-aos-duration='900' data-aos-offset="100" data-aos-easing="ease-in-sine" className='c_primary hotels_recommanded_para'>
                    Maecenas commodo odio ut vulputate cursus. Integer in egestas lectus.
                    Nam volutpat feugiat mi vitae mollis. Aenean tristique dolor bibendum
                    mi scelerisque ultrices non at lorem.
                </p>
            </div>
        </div>
        <div className='hotels_bottom'>
            <div className='hotels_card' data-aos="zoom-in" data-aos-duration='300' data-aos-offset="100" data-aos-easing="ease-in-sine">
                <div className='hotels_card_back'></div>
                <div className='hotels_card_top'>
                    <div className='card_heading hotels_card_heading'>HOTEL BOHEMIANS</div>
                    <span className='stars'>*****</span>
                    <div className='hotels_card_price'> $90<span>per night</span></div>
                    <span className='hotels_card_details'>Quisque egestas a est in convalis</span>
                    <span className='hotels_card_details'>Maecenas Pallentesque</span>
                </div>
                <div className='hotels_card_cut'></div>
                <div className='hotels_card_bottom'>

                    <div className='card_bottom_location'>
                        Instanbul, Turkey
                    </div>
                </div>
            </div>
            <div className='hotels_card' data-aos="zoom-in" data-aos-duration='600' data-aos-offset="100" data-aos-easing="ease-in-sine">
                <div className='hotels_card_back2'></div>
                <div className='hotels_card_top'>
                    <div className='card_heading hotels_card_heading'>HOTEL BOHEMIANS</div>
                    <span className='stars'>*****</span>
                    <div className='hotels_card_price'> $90<span>per night</span></div>
                    <span className='hotels_card_details'>Quisque egestas a est in convalis</span>
                    <span className='hotels_card_details'>Maecenas Pallentesque</span>
                </div>
                <div className='hotels_card_cut'></div>
                <div className='hotels_card_bottom'>

                    <div className='card_bottom_location'>
                        Instanbul, Turkey
                    </div>
                </div>
            </div>
            <div className='hotels_card' data-aos="zoom-in" data-aos-duration='900' data-aos-offset="100" data-aos-easing="ease-in-sine">
                <div className='hotels_card_back3'></div>
                <div className='hotels_card_top'>
                    <div className='card_heading hotels_card_heading'>HOTEL BOHEMIANS</div>
                    <span className='stars'>*****</span>
                    <div className='hotels_card_price'> $90<span>per night</span></div>
                    <span className='hotels_card_details'>Quisque egestas a est in convalis</span>
                    <span className='hotels_card_details'>Maecenas Pallentesque</span>
                </div>
                <div className='hotels_card_cut'></div>
                <div className='hotels_card_bottom'>

                    <div className='card_bottom_location'>
                        Instanbul, Turkey
                    </div>
                </div>
            </div>
            <div className='hotels_card' data-aos="zoom-in" data-aos-duration='1200' data-aos-offset="100" data-aos-easing="ease-in-sine">
                <div className='hotels_card_back4'></div>
                <div className='hotels_card_top'>
                    <div className='card_heading hotels_card_heading'>HOTEL BOHEMIANS</div>
                    <span className='stars hotels_card_details'>*****</span>
                    <div className='hotels_card_details'> $90<span>per night</span></div>
                    <span className='hotels_card_details'>Quisque egestas a est in convalis</span>
                    <span className='hotels_card_details'>Maecenas Pallentesque</span>
                </div>
                <div className='hotels_card_cut'></div>
                <div className='hotels_card_bottom'>

                    <div className='card_bottom_location'>
                        Instanbul, Turkey
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default RecommandedHotels;
