import Hero from "../../components/Gallary/Hero";
import HotelsandResorts from "../../components/Gallary/HotelsandResorts";
import NewsFeed from "../../components/Gallary/NewsFeed";
// import Places from "../../components/Gallary/Places";
import { useEffect } from 'react';

const Gallary = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return <div>
        <Hero />
        {/* <Places /> */}
        <HotelsandResorts />
        <NewsFeed />
    </div>
}

export default Gallary;