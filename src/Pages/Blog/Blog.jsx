import React from 'react'
import Hero from '../../components/Blog/Hero'
import Section2 from '../../components/Blog/Section2'
import { useEffect } from 'react';

const Blog = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
    const heroProps = {
      headingPart1: "Lorem Ipsum",
      headingPart2: "IS SIMPLY DUMMY",
    }
    const section2Props = {
      headingleft :"Lorem ipsum dolor sit.",
      headingPart1: "Lorem Ipsum",
      headingPart2: "is simply",
      para1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  ",
      para2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a ",
      para3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  return (
    <div>
      <Hero blogHero={heroProps}/>
      <Section2 section2Props={section2Props}/>
    </div>
  )
}

export default Blog
