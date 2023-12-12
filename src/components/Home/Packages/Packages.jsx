import { useEffect, useState, useRef } from "react";
import pkg1 from "../../../assets/Images/Home/Packages/Rectangle 31.svg";
import pkg2 from "../../../assets/Images/Home/Packages/p2.svg";
import pkg3 from "../../../assets/Images/Home/Packages/p3.svg";
import pkg4 from "../../../assets/Images/Home/Packages/p4.svg";
import pkg5 from "../../../assets/Images/Home/Packages/p5.svg";
import roadback from "../../../assets/Images/Home/Packages/back.jpg";
import carImageDesktop from "../../../assets/Images/Home/Packages/car.svg";
import hand from "../../../assets/Images/Home/Packages/hand.svg";
import carImageMobile from '../../../assets/Images/Home/Packages/mobile/mcar.svg'
import Slide from '@mui/material/Slide';
import "../../../Style/Home/Packages/Packages.css";


const Packages = () => {
  const [counter, setCounter] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(true);
  const [dir, setdir] = useState('left');
  const counterRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

  const arr = [
    {
      carPosition: "0%",
      content: "",
      package: [
        { location: "haridwar", price: 1200, img: pkg1 },
        { location: "haridwar", price: 1200, img: pkg1 },
        { location: "haridwar", price: 1200, img: pkg1 },
        { location: "haridwar", price: 1200, img: pkg1 },
        { location: "haridwar", price: 1200, img: pkg1 },
      ],
    },
    {
      carPosition: "10%",
      content: "1 to 3 Days",
      package: [
        { location: "haridwar", price: 1200, img: pkg1 },
        { location: "haridwar", price: 1200, img: pkg1 },
        { location: "haridwar", price: 1200, img: pkg1 },
        { location: "haridwar", price: 1200, img: pkg1 },
        { location: "haridwar", price: 1200, img: pkg1 },
      ],
    },
    {
      carPosition: "27%",
      content: "4 to 6 Days",
      package: [
        { location: "rishikesh", price: 1200, img: pkg2 },
        { location: "rishikesh", price: 1200, img: pkg2 },
        { location: "rishikesh", price: 1200, img: pkg2 },
        { location: "rishikesh", price: 1200, img: pkg2 },
        { location: "rishikesh", price: 1200, img: pkg2 },
      ],
    },
    {
      carPosition: "44%",
      content: "7 to 9 Days",
      package: [
        { location: "agra", price: 1200, img: pkg3 },
        { location: "agra", price: 1200, img: pkg3 },
        { location: "agra", price: 1200, img: pkg3 },
        { location: "agra", price: 1200, img: pkg3 },
        { location: "agra", price: 1200, img: pkg3 },
      ],
    },
    {
      carPosition: "61%",
      content: "10 to 12 Days",
      package: [
        { location: "hathras", price: 1200, img: pkg4 },
        { location: "hathras", price: 1200, img: pkg4 },
        { location: "hathras", price: 1200, img: pkg4 },
        { location: "hathras", price: 1200, img: pkg4 },
        { location: "hathras", price: 1200, img: pkg4 },
      ],
    },
    {
      carPosition: "78%",
      content: "13 to 15 Days",
      package: [
        { location: "mathura", price: 1200, img: pkg5 },
        { location: "mathura", price: 1200, img: pkg5 },
        { location: "mathura", price: 1200, img: pkg5 },
        { location: "mathura", price: 1200, img: pkg5 },
        { location: "mathura", price: 1200, img: pkg5 },
      ],
    },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCounter(1);
        } else {
          setCounter(0);
        }
      });
    };

    const intersectionObserver = new IntersectionObserver(
      handleIntersection,
      options
    );

    if (counterRef.current) {
      intersectionObserver.observe(counterRef.current);
    }

    return () => {
      // Cleanup the observer when the component unmounts
      intersectionObserver.disconnect();
    };
  }, [counterRef]);

  const handleButtonClick = (index) => {
    setdir('right')
    setAnimationDirection(false);
    let timer;
    if(window.innerWidth<720){
      timer=400;
    }else{
      timer=600;
    }
    setTimeout(() => {
      setdir('left')
      setAnimationDirection(true);
      setCounter(index);
    }, timer);
  };

  return (
    <div className={`package_section ${isMobile ? 'mobile-view' : ''}`}>
      <div className="car" ref={counterRef}>
        <div className="car-postion">
          {arr.map((item, index) => (
            <div
              key={index}
              className={`carPosition ${item.content ? "" : "empty"}`}
              onClick={() => {
                handleButtonClick(index);
              }}
              style={{
                [isMobile ? 'top' : 'left']: item.carPosition || "0%",
                color: counter === index ? "Yellow" : "",
              }}
              data-aos="zoom-in" data-aos-duration='500' data-aos-offset="100" data-aos-easing="ease-in-sine"
            >
              {item.content}
              {<img src={hand} alt="" />}
            </div>
          ))}
        </div>
        <div className="backImage">
          <img src={roadback} alt="" />
        </div>
        <div
          className="carimage"
          style={{
            [isMobile ? 'top' : 'left']: arr[counter]?.carPosition || "0%",
            transition: isMobile ? "top 1s ease" : `left 1s ease`,
          }}
        >
          <img
            src={isMobile ? carImageMobile : carImageDesktop}
            alt=""
          />
        </div>
        <Slide direction={dir} in={animationDirection} mountOnEnter timeout={500} >
          <div className="packagesDayWise">
            {arr[counter]?.package.map((pkg, pkgIndex) => (
              <div className="packageDetails" key={pkgIndex}>
                <div className="packageImageContainer">
                  <img src={pkg.img} alt="" />
                </div>
                <div className="details">
                  <p>{pkg.location}</p>
                  <p>{pkg.price}</p>
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </div>
  );
};


export default Packages;
