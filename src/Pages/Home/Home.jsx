
import Destination from '../../components/Home/Destinations/Destinations';
import Hero from '../../components/Home/Hero/Hero';
import About from '../../components/Home/About/About';
import Packages from '../../components/Home/Packages/Packages';
import RecommandedHotels from '../../components/Home/Recommanded Hotels/RecommandedHotels';
import OurTestimonials from '../../components/Home/Our Testimonials/OurTestimonials';
import Gallary from '../../components/Home/Gallary/Gallary';
import Blog from '../../components/Home/Blog/Blog';
// import Test from '../../components/Home/Test/Test.jsx';
import TravelStats from '../../components/Home/About/TravelStats';
import { useEffect } from 'react';

const Home = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return <div style={{overflow:"hidden"}}>
        <Hero />
        <Destination />
        <TravelStats/>
        <About />
        <Packages />
        <RecommandedHotels />
        <OurTestimonials />
        <Gallary />
        <Blog />
        {/* <Test/> */}
    </div>
}

export default Home;