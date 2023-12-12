import '../../../Style/Home/Hero/Hero.css';
import b1 from '../../../assets/Images/Home/Hero/bottom/btm1.webp';
import b2 from '../../../assets/Images/Home/Hero/bottom/btm2.webp';
import b3 from '../../../assets/Images/Home/Hero/bottom/btm3.webp';
import b4 from '../../../assets/Images/Home/Hero/bottom/btm4.webp';
import searchIcon from "../../../assets/Images/Home/Hero/searchIcon.svg"
import Carousel from './Carousal';
import CustomSelect from './CustomSelect';

const Hero = () => {
    return <section className="hero_section">
        <div className='heroContent'>
            <div className='search'>
                <CustomSelect />
                <div className='searchInput'><input type="text" placeholder='Search Destination' /> <img className='searchIcon' src={searchIcon} alt="" /></div>
            </div>
            <div className="home_hero_page_carousal">
                <Carousel />
            </div>
        </div>
        <div className='hero_bottom_section'>
            <div className='btm_item'><img src={b1} alt="" />
                <div className='btm_details'>  HAWAI HONOLULU</div>
                <div className='btm_btm'>  HAWAI HONOLULU</div>
                <div className='pricing'>price</div>
            </div>
            <div className='btm_item'>
                <img src={b2} alt="" />
                <div className='btm_details'>  HAWAI HONOLULU</div>
                <div className='btm_btm'>  HAWAI HONOLULU</div>
                <div className='pricing'>price</div>
            </div>
            <div className='btm_item'>
                <img src={b3} alt="" />
                <div className='btm_details'>  HAWAI HONOLULU</div>
                <div className='btm_btm'>  HAWAI HONOLULU</div>
                <div className='pricing'>price</div>
            </div>
            <div className='btm_item'>
                <img src={b4} alt="" />
                <div className='btm_details'>  HAWAI HONOLULU</div>
                <div className='btm_btm'>  HAWAI HONOLULU</div>
                <div className='pricing'>price</div>
            </div>
        </div>

    </section>
}

export default Hero