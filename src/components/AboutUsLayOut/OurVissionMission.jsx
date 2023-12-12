import React from 'react';
import '../../Style/PageStyle/AboutUsStyle.css';
import c2 from '../../assets/Images/Aeroplane1.json';
import { Player } from '@lottiefiles/react-lottie-player';

const OurVissionMission = () => {
  return (
    <div className='OurVissionMission'>
      <div className='OurVissionMission-content'>
        <div className='ourvisiontext' data-aos="fade-right" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
          <h3 className='heading_light c_secondary'><b>Our Mission <span className='c_dark'>and Our Vision</span></b></h3>
          <p className='c_dark'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
          </p>

        </div>
        <div className='ourvisionimg'>
          <Player hover src={c2} autoplay ></Player>
        </div>
      </div>
    </div>
  );
};

export default OurVissionMission;