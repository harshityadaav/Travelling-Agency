import Hero from "../../components/Packages/Hero";
import hs1 from '../../assets/Images/Shared/Hero/1.jpg';
import hs2 from '../../assets/Images/Shared/Hero/2.jpg';
import hs3 from '../../assets/Images/Shared/Hero/3.jpg';
import Offerings from "../../components/Packages/Offerings";
import os1 from '../../assets/Images/Shared/offerings/Rectangle 161 (1).jpg';
import os2 from '../../assets/Images/Shared/offerings/Rectangle 161 (2).jpg';
import os3 from '../../assets/Images/Shared/offerings/Rectangle 161.jpg';
import g1 from '../../assets/Images/Shared/Gallary/Group 164.jpg';
import g2 from '../../assets/Images/Shared/Gallary/Rectangle 108.jpg';
import g3 from '../../assets/Images/Shared/Gallary/Rectangle 109.jpg';
import g4 from '../../assets/Images/Shared/Gallary/Rectangle 110.jpg';
import g5 from '../../assets/Images/Shared/Gallary/Rectangle 111.jpg';
import g6 from '../../assets/Images/Shared/Gallary/Rectangle 112.jpg';
import g7 from '../../assets/Images/Shared/Gallary/Rectangle 113.jpg';
import g8 from '../../assets/Images/Shared/Gallary/Rectangle 115.jpg';
import Gallary from "../../components/Packages/Gallary";
import NewsArticles from "../../components/Packages/News&Articles";
import nai from '../../assets/Images/Shared/News/Rectangle 146.jpg';
import { useEffect } from 'react';

const herodata = {
    image: {
        heroslider1: hs1,
        heroslider2: hs2,
        heroslider3: hs3,
    },
    sliderheading1: 'Trekking1',
    sliderheading2: 'Trekking2',
    sliderheading3: 'Trekking3',
    heading: 'Packages',
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, facere magni laboriosam, dolorem tempora blanditiis architecto ipsa unde asperiores porro,maiores velit sequi dignissimos beatae voluptatem harum autem aperiam minima"
}

const offeringsdata = [
    {
        offeringssliderimage: os1,
        heading: 'Loram Ipsum1',
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, facere magni laboriosam, dolorem tempora blanditiis",
    },
    {
        offeringssliderimage: os2,
        heading: 'Loram Ipsum2',
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, facere magni laboriosam, dolorem tempora blanditiis",
    },
    {
        offeringssliderimage: os3,
        heading: 'Loram Ipsum3',
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, facere magni laboriosam, dolorem tempora blanditiis",
    },
    {
        offeringssliderimage: os3,
        heading: 'Loram Ipsum3',
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, facere magni laboriosam, dolorem tempora blanditiis",
    },
]

const gallaryimages = [
    { image: g1 },
    { image: g2 },
    { image: g3 },
    { image: g4 },
    { image: g5 },
    { image: g6 },
    { image: g7 },
    { image: g8 },
]

const newsdata = {
    image: nai,
    fheading: 'loram',
    lheading: 'ipsum',
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, facere magni laboriosam, dolorem tempora blanditiis architecto ipsa unde asperiores porro,maiores velit sequi dignissimos beatae voluptatem harum autem aperiam minima"
}

const Packages = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return <div style={{overflowX:"hidden"}}>
        <Hero herodata={herodata} />
        <Offerings offeringsdata={offeringsdata} />
        <Gallary gallaryimgages={gallaryimages} />
        <NewsArticles newsdata={newsdata} />
    </div>
}

export default Packages;