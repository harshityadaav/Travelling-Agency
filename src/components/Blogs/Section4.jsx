import "../../Style/Blogs/Section4.css";
import img1 from "../../assets/Images/Blogs/Rectangle 123.png";
import img2 from "../../assets/Images/Blogs/Rectangle 124.png";
const Section4 = ({ section4Props }) => {
  return (
    <div className="blogs-section4">
      <div className="blogs-section4-left">
        <img src={img1} alt="" />
        <p>{section4Props.para}</p>
        <p>{section4Props.para}</p>
        <p>{section4Props.para}</p>
        <p>{section4Props.para}</p>
      </div>
      <div className="blogs-section4-right">
      <div>
        <h1>
          <span style={{ color: "var(--secondary)" }}>
            {section4Props.headingPart1 }
          </span>
          <span style={{ color: "var(--p-dark)" }}>
            &nbsp;{section4Props.headingPart2}
          </span>
        </h1>
        <p>{section4Props.para}</p>
        <p>{section4Props.para}</p>
        </div>
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default Section4;
