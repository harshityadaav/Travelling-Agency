import PackageDetailsHero from "../../components/Packages/Details/Hero"
import Tour from "../../components/Packages/Details/Tour";
import { useEffect } from 'react';

const packagedetailsherodata = {
    heading: "CHARDHAM YATRA",
    year: ' 2023',
    way: 'BY ROAD KEDARNATH, EX. HARIDWAR OR DEHRADUN',
    details: '(ITINERARY: HARIDWAR-GUPTKASHI-KEDARNATH-GUPTKASHI-HARIDWAR)',
    description: 'Gaurikund, Kedarnath Temple, Ram Jhula and Laxman Jhula along with Rudraprayag (Alaknanda River and Mandakini River) & Devprayag (Alaknanda River and Bhagirathi River).'
}

const PackageDetails = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return <>
        <PackageDetailsHero packagedetailsherodata={packagedetailsherodata} />
        <Tour />
    </>
}

export default PackageDetails;