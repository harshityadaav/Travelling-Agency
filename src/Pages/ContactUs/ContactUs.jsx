import React from 'react'
import Hero from '../../components/ContactUs/Hero';
import Map from '../../components/ContactUs/Map';
import { useEffect } from 'react';

const ContactUs = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <Hero/>
        <Map/>
    </div>
  )
}

export default ContactUs