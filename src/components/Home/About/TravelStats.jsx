import React, { useState, useEffect, useRef } from 'react';
import i1 from '../../../assets/Images/Home/About/1.svg';
import i2 from '../../../assets/Images/Home/About/2.svg';
import i3 from '../../../assets/Images/Home/About/3.svg';
import i4 from '../../../assets/Images/Home/About/4.svg';
import i5 from '../../../assets/Images/Home/About/5.svg';
import i6 from '../../../assets/Images/Home/About/6.svg';
const Counter = ({ start, end, duration }) => {
    const [count, setCount] = useState(start);
    const countRef = useRef(count);
    countRef.current = count;

    const updateCount = () => {
        const difference = end - start;
        const perTick = (difference / duration) * 10;

        if (countRef.current < end) {
            setCount(countRef.current + perTick);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Reset count to start value when component is visible
                    setCount(start);
                    const interval = setInterval(updateCount, 100);
                    return () => clearInterval(interval);
                }
            },
            { threshold: 0 } // Set threshold to 0 to trigger when any part of the element is in view
        );

        observer.observe(document.getElementById('counter')); // Change 'counter' to the actual ID of your component

        return () => observer.disconnect();
    }, [start, end, duration]);

    return <div id="counter">{Math.floor(count)}</div>;
};

const App = () => {
    return (

        <div className='about_top' data-aos="zoom-in" data-aos-duration='500'
            data-aos-offset="100"
            data-aos-easing="ease-in-sine">
            <div className='about_top_item'>
                <div className='about_top_item_icon'>
                    <img src={i1} alt="" />
                </div>
                <div className='about_top_item_details'>
                    <Counter start={0} end={345} duration={2000} />
                    <p>Tours</p>
                </div>
            </div>
            <div className='slash'>/</div>
            <div className='about_top_item'>
                <div className='about_top_item_icon'>
                    <img src={i2} alt="" />
                </div>
                <div className='about_top_item_details'>
                    <Counter start={0} end={438} duration={2000} />
                    <p>Holidays</p>
                </div>
            </div>
            <div className='slash'>/</div>
            <div className='about_top_item'>
                <div className='about_top_item_icon'>
                    <img src={i3} alt="" />
                </div>
                <div className='about_top_item_details'>
                    <Counter start={0} end={526} duration={2000} />
                    <p>Cruises</p>
                </div>
            </div>
            <div className='slash'>/</div>
            <div className='about_top_item'>
                <div className='about_top_item_icon'>
                    <img src={i4} alt="" />
                </div>
                <div className='about_top_item_details'>
                    <Counter start={0} end={169} duration={2000} />
                    <p>Flights</p>
                </div>
            </div>
            <div className='slash'>/</div>
            <div className='about_top_item'>
                <div className='about_top_item_icon'>
                    <img src={i5} alt="" />
                </div>
                <div className='about_top_item_details'>
                    <Counter start={0} end={293} duration={2000} />
                    <p>Cars</p>
                </div>
            </div>
            <div className='slash'>/</div>
            <div className='about_top_item'>
                <div className='about_top_item_icon'>
                    <img src={i6} alt="" />
                </div>
                <div className='about_top_item_details'>
                    <Counter start={0} end={675} duration={2000} />
                    <p>Tours</p>
                </div>
            </div>
        </div>

    );
};

export default App;
