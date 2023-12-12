import '../../Style/Blog/Hero.css';

const Hero = ({blogHero}) => {
  return (
    <div className='blog-hero'>
      <h1>
            <span style={{ color: "var(--secondary)" }}>
              {blogHero.headingPart1}&nbsp;
            </span>
            <span style={{ color: "var(--primary)" }}>
              {blogHero.headingPart2}
            </span>
          </h1>
    </div>
  )
}

export default Hero
