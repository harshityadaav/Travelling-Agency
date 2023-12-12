import { Zoom } from 'react-awesome-reveal';
import '../../../Style/Packages/Details/Hero.css';

const PackageDetailsHero = ({ packagedetailsherodata }) => {
    return <section className='package_details_section'>
        <div className='package_details_details'>
            <Zoom cascade damping={0.2}>
            <h1 className='heading c_secondary package_details_heading'>{packagedetailsherodata.heading}<span className='c_primary'>{packagedetailsherodata.year}</span></h1>
            <h1 className='heading_light c_primary package_details_heading_sub'>{packagedetailsherodata.way}</h1>
            <p className='c_primary package_details_hero_details'>{packagedetailsherodata.details}</p>
            <p className='c_secondary package_details_hero_details'>{packagedetailsherodata.description}</p>
            </Zoom>
        </div>
    </section>
}


export default PackageDetailsHero;