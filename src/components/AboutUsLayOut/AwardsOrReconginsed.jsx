import React from 'react'
import '../../Style/PageStyle/AboutUsStyle.css';
import first from '../../assets/Images/AboutUsImage/Winners-cuate (1) 1.svg'
import c1 from '../../assets/Images/Prize3.json'
import { Fade } from 'react-awesome-reveal';
import { Player } from '@lottiefiles/react-lottie-player';
const AwardsOrReconginsed = () => {
  return (
    <div className='award'>
      <div className='award-content'>
        <div className='awardtext' data-aos="fade-right" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
          <h1 className='heading_light c_dark'><b>Awards Or <span className='c_secondary'>Recognition</span></b></h1>
          <p className='c_dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. </p>
        </div>
      </div>

      <div className='awardimg'>
        <Player hover loop src={c1} ></Player>
      </div>

    </div>
  )
}

export default AwardsOrReconginsed