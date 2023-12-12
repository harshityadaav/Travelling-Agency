import React from "react";
import '../../Style/ContactUs/Hero.css'
import Form from "./Form";
import { Fade } from "react-awesome-reveal";
const Hero = () => {
  return (
    <div className="contactus-main">
      <div className="contact-content">
       <div className='first-part'>
       <Fade direction="left">
       <h2>Lorem Ipsum wanted</h2>
       </Fade>
        <Fade direction="left" delay={1000}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur,{" "}
        </p>
        </Fade>
       </div>
       <div className="second-part">
       <Form/>
       </div>
      </div>
      
    </div>
  );
};

export default Hero;
