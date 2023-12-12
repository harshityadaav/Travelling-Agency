import React, { useEffect } from 'react'
import Hero from '../../components/AboutUsLayOut/Hero';
import OurVissionMission from '../../components/AboutUsLayOut/OurVissionMission';
import TeamIntroduction from '../../components/AboutUsLayOut/TeamIntroduction';
import UserBenifits from '../../components/AboutUsLayOut/UserBenifits';
import OurExpert from '../../components/AboutUsLayOut/OurExpert';
import AwardsOrReconginsed from '../../components/AboutUsLayOut/AwardsOrReconginsed';
import Testimonial from '../../components/AboutUsLayOut/Testimonial';

const AboutUs = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <Hero />
      <OurVissionMission />
      <TeamIntroduction />
      <OurExpert />
      <UserBenifits />
      <AwardsOrReconginsed />
      <Testimonial />
    </>
  )
}

export default AboutUs