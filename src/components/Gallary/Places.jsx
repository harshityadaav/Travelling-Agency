// import { Fade } from 'react-awesome-reveal';
// import p1 from '../../assets/Images/Gallary/places/1a.jpg';
// import p2 from '../../assets/Images/Gallary/places/1b.jpg';
// import p3 from '../../assets/Images/Gallary/places/1c.jpg';
// import p4 from '../../assets/Images/Gallary/places/1d.jpg';
import '../../Style/Gallary/Places.css';
import r1 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 54.jpg';
import r2 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 59.jpg';
import r3 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 55.jpg';
import r4 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 56.jpg';
import r5 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 58.jpg';
// import r10 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 62.jpg';
// import r11 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 63.jpg';
// import r12 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 64.jpg';
// import r13 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 65.jpg';
// import r14 from '../../assets/Images/Gallary/Hotels and Resorts/Rectangle 66.jpg';
// import '../../Style/Gallary/Hotels.css';
import { Fade, Zoom } from 'react-awesome-reveal';

const Places = () => {
    return <section className='resorts_section'>
        <div className='resorts_top'>
            <Fade direction='top' cascade damping={0.2}>
                <h1 className='heading_light c_secondary home_testimonial_top_heading'> <b>Hotels <span className='c_dark'>And Resorts</span></b></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor accusamus et totam consequuntur assumenda labore eaque
                    rem, vero earum qui amet, nobis optio enim rerum quos! Cumque, iure quasi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor accusamus et totam consequuntur assumenda labore eaque
                    rem, vero earum qui amet, nobis optio enim rerum quos! Cumque, iure quasi.
                </p>
            </Fade>
        </div>
        <div className='resorts_middle'>
            <div >
                <Fade delay={200} className='first'><img src={r1} alt="" /></Fade>
            </div>
            <div className='resorts_middle_item'>
                <div >
                    <Zoom cascade damping={0.2} ><img src={r2} alt="" /></Zoom>
                    <Zoom cascade damping={0.2} ><img src={r3} alt="" /></Zoom>
                </div>
                <div className='first_images'>
                    <Zoom cascade damping={0.2} ><img src={r4} alt="" /></Zoom>
                    <Zoom cascade damping={0.2} ><img src={r5} alt="" /></Zoom>
                </div>
            </div>
        </div>
        {/* <div className='resorts_happy_customers'>
            <h1 className='heading_light c_secondary'> <b>Our Happy <span className='c_dark'>Customers</span></b></h1>
        </div> */}
        {/* <div className='resorts_bottom'>
            <div>
                <Zoom delay={100}>  <img src={r10} alt="" />   </Zoom>
            </div>
            <div>
                <Zoom delay={200}>  <img src={r11} alt="" />   </Zoom>
            </div>
            <div>
                <Zoom delay={300}>  <img src={r12} alt="" />   </Zoom>
            </div>
            <div>
                <Zoom delay={400}>  <img src={r13} alt="" />   </Zoom>
            </div>
            <div>
                <Zoom delay={500}>  <img src={r14} alt="" />   </Zoom>
            </div>
        </div> */}
    </section>
    // <section className='gallary_places_section'>
    //     <div className='gallary_places_top'>
    //         <Fade direction='left' cascade damping={0.2}>
    //             <h1 className='heading_light c_secondary'> <b>Beautiful Places <span className='c_dark'>Around The World</span></b></h1>
    //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor accusamus et totam consequuntur assumenda labore eaque
    //                 rem, vero earum qui amet, nobis optio enim rerum quos! Cumque, iure quasi.
    //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor accusamus et totam consequuntur assumenda labore eaque
    //                 rem, vero earum qui amet, nobis optio enim rerum quos! Cumque, iure quasi.
    //             </p>
    //         </Fade>
    //     </div>
    //     <div className='gallary_places_bottom'>
    //         <div className='gallary_places_bottom_left'>
    //             <Fade direction='left'><img src={p1} alt="" /></Fade>
    //         </div>
    //         <div className='gallary_places_bottom_middle'>
    //             <Fade direction='top' delay={300}>
    //                 <img src={p2} className='gallary_places_bottom_middle_img' alt="" />
    //             </Fade>
    //             <Fade direction='bottom' delay={300} >
    //                 <img src={p3} alt="" />
    //             </Fade>
    //         </div>
    //         <div className='gallary_places_bottom_right'>
    //             <Fade direction='right'><img src={p4} alt="" /></Fade>
    //         </div>
    //     </div>
    // </section>
}

export default Places;