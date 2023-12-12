import React from 'react'
import '../../Style/PageStyle/AboutUsStyle.css';
import first from '../../assets/Images/AboutUsImage/20065919_6216259 1.svg'
import { Fade } from 'react-awesome-reveal';
import { Player } from '@lottiefiles/react-lottie-player';
import c1 from '../../assets/Images/Home/Hero/carousel/2.json';
import c2 from '../../assets/Images/Planning 2.json';

const OurExpert = () => {
  return (
    <div className='ourexpert'>
      <div className='ourexpert-content'>
        <div className='ourexpertimg'>
          <Player hover autoplay src={c2} ></Player>
        </div>
      </div>
      <div className='ourexperttext' data-aos="fade-left" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
        <h1 className='heading_light c_secondary'><span><b> Our Expertise</b></span></h1>
        <p className='c_dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
          Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
          mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
        </p>
      </div>
    </div>
  )
}

export default OurExpert