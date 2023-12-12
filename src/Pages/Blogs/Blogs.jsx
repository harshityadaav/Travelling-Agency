import Hero from "../../components/Blogs/Hero";
import Section2 from "../../components/Blogs/Section2";
import Section3 from "../../components/Blogs/Section3";
// import Section4 from "../../components/Blogs/Section4";
import Section5 from "../../components/Blogs/Section5";
import { useEffect } from 'react';

const Blogs = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const heroProps = {
    title: "BLOGS",
    leftPara:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",

    rightHeadingPart1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    rightHeadingPart2:
      "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ",

    rightPara1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ",
    rightPara2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ",
  };
  const section2Props = {
    headingPart1: "Lorem Ipsum",
    headingPart2: "is simply",
    para: "Lorem Ipsum is simply dummy text of thye printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ",
  };
  const section3Props = {
    headingPart1: "Lorem Ipsum",
    headingPart2: "is simply",
    para:"Lorem Ipsum is simply dummy text of thye printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ",
  }
  // const section4Props = {
  //   headingPart1: "Lorem Ipsum",
  //   headingPart2: "is simply",
  //   para:"Lorem Ipsum is simply dummy text of thye printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ",
  // }
  const section5Props = {
    headingPart1: "Lorem Ipsum",
    headingPart2: "is simply",
    para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  ",
  }
  return (
    <div style={{overflowX:"hidden"}}>
      <Hero hero={heroProps} />
      <Section2 section2Props={section2Props} />
      <Section3 section3Props={section3Props}/>
      {/* <Section4 section4Props={section4Props}/> */}
      <Section5 section5Props={section5Props}/>
    </div>
  );
};

export default Blogs;
