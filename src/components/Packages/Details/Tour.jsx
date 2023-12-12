import '../../../Style/Packages/Details/Tour.css';
import road from '../../../assets/Images/Shared/Package Details/Tour/road.jpg';
import cityimgage from '../../../assets/Images/Shared/Package Details/Tour/tour1.jpg'
import hr from '../../../assets/Images/Shared/Package Details/Tour/hr.jpg';
import caricon from '../../../assets/Images/Shared/Package Details/Tour/car.png';
import { useEffect, useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';

let tour = [
    {
        day: '01',
        heading: 'HARIDWAR –GUPTKASHI (205 KM / 7 TO 8 HRS)',
        description: 'Arrival early morning (Must Be Before 9 Am) after that and drive for Guptkashi.On arrival check in at hotel. Rest of the day free to explore the Guptkashi town. Dinner and Overnight stay in Guptkashi hotel/Camps.',
    },
    {
        day: '02',
        heading: 'HARIDWAR –GUPTKASHI (205 KM / 7 TO 8 HRS)',
        description: 'Arrival early morning (Must Be Before 9 Am) after that and drive for Guptkashi.On arrival check in at hotel. Rest of the day free to explore the Guptkashi town. Dinner and Overnight stay in Guptkashi hotel/Camps.',
    },
    {
        day: '03',
        heading: 'HARIDWAR –GUPTKASHI (205 KM / 7 TO 8 HRS)',
        description: 'Arrival early morning (Must Be Before 9 Am) after that and drive for Guptkashi.On arrival check in at hotel. Rest of the day free to explore the Guptkashi town. Dinner and Overnight stay in Guptkashi hotel/Camps.',
    },
    {
        day: '04',
        heading: 'HARIDWAR –GUPTKASHI (205 KM / 7 TO 8 HRS)',
        description: 'Arrival early morning (Must Be Before 9 Am) after that and drive for Guptkashi.On arrival check in at hotel. Rest of the day free to explore the Guptkashi town. Dinner and Overnight stay in Guptkashi hotel/Camps.',
    },
    {
        day: '01',
        heading: 'HARIDWAR –GUPTKASHI (205 KM / 7 TO 8 HRS)',
        description: 'Arrival early morning (Must Be Before 9 Am) after that and drive for Guptkashi.On arrival check in at hotel. Rest of the day free to explore the Guptkashi town. Dinner and Overnight stay in Guptkashi hotel/Camps.',
    },
    {
        day: '02',
        heading: 'HARIDWAR –GUPTKASHI (205 KM / 7 TO 8 HRS)',
        description: 'Arrival early morning (Must Be Before 9 Am) after that and drive for Guptkashi.On arrival check in at hotel. Rest of the day free to explore the Guptkashi town. Dinner and Overnight stay in Guptkashi hotel/Camps.',
    },
    {
        day: '03',
        heading: 'HARIDWAR –GUPTKASHI (205 KM / 7 TO 8 HRS)',
        description: 'Arrival early morning (Must Be Before 9 Am) after that and drive for Guptkashi.On arrival check in at hotel. Rest of the day free to explore the Guptkashi town. Dinner and Overnight stay in Guptkashi hotel/Camps.',
    },
    {
        day: '04',
        heading: 'HARIDWAR –GUPTKASHI (205 KM / 7 TO 8 HRS)',
        description: 'Arrival early morning (Must Be Before 9 Am) after that and drive for Guptkashi.On arrival check in at hotel. Rest of the day free to explore the Guptkashi town. Dinner and Overnight stay in Guptkashi hotel/Camps.',
    },
]

const tourtable = [
    { city: 'GuptaKashi/Ukhimath', value: 'Camp Nirvana/Advanta/Lal Resorts/Similar', comfort: 'Villa Aadhya/ Madhuganga / Similar', nights: 2 },
    { city: 'GuptaKashi/Ukhimath', value: 'Camp Nirvana/Advanta/Lal Resorts/Similar', comfort: 'Villa Aadhya/ Madhuganga / Similar', nights: 2 },
    { city: 'GuptaKashi/Ukhimath', value: 'Camp Nirvana/Advanta/Lal Resorts/Similar', comfort: 'Villa Aadhya/ Madhuganga / Similar', nights: 2 },
    { city: 'GuptaKashi/Ukhimath', value: 'Camp Nirvana/Advanta/Lal Resorts/Similar', comfort: 'Villa Aadhya/ Madhuganga / Similar', nights: 2 }
]

let style = {
    position: "absolute",
    zIndex: "4",
    top: "0%",
    transition: "2s",
    transitionTimingFunction: "ease-in"
}
let pos = [];
let pos1 = [];

const Tour = () => {
    let height = `${tour.length * 65}vh`;
    let height2 = `${tour.length * 63}vh`;
    const [car, setcar] = useState(style);
    const scrol = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
        setcar({ ...style, top: '4%', transition: '4s' });

        let temp = 0;
        for (let j = 0; j < tour.length - 1; j++) {
            temp = temp + (95 / tour.length);
            let pushvalue = `${temp}%`;
            pos.push(pushvalue);
            // pushvalue = `${temp + 3}%`;
            pos1.push(pushvalue);
        }
    }, [tour.length]);

    //////////////////////////////////      CAR ANIMATION FUNCTION      ////////////////////////////////////
    const caranimation = async (e) => {
        setcar({ ...style, top: '4%', transition: '.5s' })
        e.preventDefault()
        let i = 0;
        setInterval(() => {
            if (i === tour.length - 1) {
                clearInterval();
            } else {
                window.scrollTo({ left: 0, top: 1235 + (window.innerHeight) * 0.6 * i, behavior: 'smooth' })
                setcar({ ...style, top: pos1[i], transition: '1.5s' })
                i++;
            }
        }, 1500)
    }

    return <section className='package_details_Tour_section'>
        <div className='tour_back_details' style={{ height: height }}>
            <div className='tour_back_road'>
                <img src={road} alt="" style={{ height: height2, width: "80px" }} />
            </div>
            <div className='package_details_tour_start' onClick={caranimation} >
                <div> START</div>
            </div>
            <div className='tour_back_car' style={car} ref={scrol}>
                <img src={caricon} alt="" />
            </div>
            <div className='package_details_tour_end'>
                <div>END</div>
            </div>
            <div className='tour_day_details'>
                {
                    tour.map((day, index) => {
                        console.log(day)
                        return (
                            <div key={`b${index}`}
                                style={{ position: 'absolute', top: pos[index - 1] }}
                                className={`package_details_tour_day_${(index + 1) % 2 === 0 ? 'even' : 'odd'}`}>
                                <Fade cascade damping={0.5}>
                                    <h1 className='heading_secondary c_secondary package_details_animation_heading'>{day.day} :
                                        <span className='c_primary package_details_animation_heading'>{day.heading}</span>
                                    </h1>
                                    <p className='c_primary package_details_animation_para'>{day.description}</p>
                                </Fade>
                            </div>

                        );
                    })
                }
            </div>
        </div>
        <div className='package_details_tour_bottom'>
            <div>
                <img src={hr} alt="" />
                <span className='heading_secondary c_secondary'>TOUR END</span>
                <img src={hr} alt="" />
            </div>
        </div>
        <hr className='package_tour_hr' />
        <div className='hotels_used_package'>
            <h1 className='heading_light package_details_animation_heading'>
                <b>HOTELS USED IN <span className='c_secondary package_details_animation_heading'>THE PACKAGE</span></b></h1>
        </div>
        <div className='package_details_tour_table'>
            <table border='1'>
                <thead>
                    <tr className='tourtable_heading_row'>
                        <th>City</th>
                        <th>Value Package</th>
                        <th>Comfort Package</th>
                        <th>Nights</th>
                    </tr>
                </thead>
                <tbody>
                    {tourtable.map((pkg, index) => {
                        return <tr key={`a${index}`} className='tourtable_individual_pkg'>
                            <td className='tourtable_city'>
                                <div className='tourtable_city_image'>
                                    <img src={cityimgage} alt="" />
                                </div>
                                <div className='tourtable_city_name'>
                                    {pkg.city}
                                </div>
                            </td>
                            <td className='tourtable_value'>
                                {pkg.value}
                            </td>
                            <td className='tourtable_comfort'>
                                {pkg.comfort}
                            </td>
                            <td className='tourtable_nights'>
                                {pkg.nights}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
        <div className='tour_package_inclusion'>
            <Fade direction='left' cascade damping={0.2}>
                <h1 className='heading_secondary c_secondary package_details_animation_heading'> PACKAGE INCLUSIONS :</h1>
                <li className='tour_package_inclusion_li package_details_animation_para'>2 nights’ stay in hotel in Guptkashi with MAP.</li>
                <li className='tour_package_inclusion_li package_details_animation_para'>1 night’ stay in Kedarnath (Neat and clean GMVN camp on sharing basis/basic hotel accommodation, which is best available at Kedarnath with EP)</li>
                <li className='tour_package_inclusion_li package_details_animation_para'>Transfer & Sightseeing by Ac Vehicle.</li>
                <li className='tour_package_inclusion_li package_details_animation_para'>Transfer & Sightseeing by Ac Vehicle.</li>
            </Fade>
        </div>
        <div className='tour_package_inclusion'>
            <Fade direction='left' cascade damping={0.2}>
                <h1 className='heading_secondary c_secondary package_details_animation_heading'> PACKAGE INCLUSIONS :</h1>
                <li className='tour_package_inclusion_li package_details_animation_para'>2 nights’ stay in hotel in Guptkashi with MAP.</li>
                <li className='tour_package_inclusion_li package_details_animation_para'>1 night’ stay in Kedarnath (Neat and clean GMVN camp on sharing basis/basic hotel accommodation, which is best available at Kedarnath with EP)</li>
                <li className='tour_package_inclusion_li package_details_animation_para'>Transfer & Sightseeing by Ac Vehicle.</li>
                <li className='tour_package_inclusion_li package_details_animation_para'>Transfer & Sightseeing by Ac Vehicle.</li>
            </Fade>
        </div>

    </section>
}

export default Tour;