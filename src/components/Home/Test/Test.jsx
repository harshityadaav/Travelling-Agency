import { useState } from "react";
import '../../../Style/Home/Test/Test.css';
import img from '../../../assets/Images/Gallary/Hotels and Resorts/Rectangle 54.jpg';



const Test = () => {
    const [styl, setstyl] = useState({ background: "rgba(0,0,0,0)" })
    const [styl1, setstyl1] = useState({ background: "rgba(0,0,0,0)" })
    const [styl2, setstyl2] = useState({ background: "rgba(0,0,0,0)" })
    const [styl3, setstyl3] = useState({ background: "rgba(0,0,0,0)" })

    const hoverinhandler = async () => {

        setTimeout(() => {
            setstyl({ background: "rgba(0,0,0,0.6)" })
        }, 300);

        setTimeout(() => {
            setstyl1({ background: "rgba(0,0,0,0.6)" })
        }, 600);

        setTimeout(() => {
            setstyl2({ background: "rgba(0,0,0,0.6)" })
        }, 1000);
        setTimeout(() => {
            setstyl3({ background: "rgba(0,0,0,0.6)" })
        }, 1400);

    }

    const hoverouthandler = async () => {
        setstyl({ background: "rgba(0,0,0,0)" })
        setstyl1({ background: "rgba(0,0,0,0)" })
        setstyl2({ background: "rgba(0,0,0,0)" })
        setstyl3({ background: "rgba(0,0,0,0)" })
    }

    return (
        <div
            className='dark-block-image-container' onMouseEnter={hoverinhandler} onMouseLeave={hoverouthandler} >
            <img src={img} alt={'alt'} className="image" />
            <div className="dark-block" style={styl1} />
            <div className="dark-block" style={styl2} />
            <div className="dark-block" style={styl3} />
            <div className="dark-block" style={styl} />
        </div>
    );
};

export default Test;
