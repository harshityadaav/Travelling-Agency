import '../../Style/Blogs/Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = ({hero}) => {
  const navigate = useNavigate();
  return (
    <div className='hero-section'>
      <div className="blogs-hero-left"> 
        <h1>{hero.title}</h1>
        <p>{hero.leftPara}</p>
        <button onClick={() => navigate("/blog")}>View More</button>
      </div>
      <div className="blogs-hero-right">
        <h1><span style={{color:"var(--secondary)"}}>{hero.rightHeadingPart1} </span> <span style={{color:"var(--primary)"}}>{hero.rightHeadingPart2}</span> </h1>
        <p>{hero.rightPara1}</p>
        <p>{hero.rightPara2}</p>
      </div>
    </div>
  )
}

export default Hero
