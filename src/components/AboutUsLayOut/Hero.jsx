import React from 'react';
import '../../Style/PageStyle/AboutUsStyle.css';


const Hero = () => {
  return (
    <div className='About-hero'>
      <div className='hero-text' data-aos="zoom-in" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">

        <div className='heading_primary'><b> About <span className='c_primary'>Us</span></b></div>
        <p className='c_primary'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo,
          non suscipit magna interdum eu.
        </p>

      </div>
    </div>
  );
};

export default Hero;