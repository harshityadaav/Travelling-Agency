import "../../Style/Blogs/Section5.css";
import img1 from "../../assets/Images/Blogs/Rectangle 132.png";
import img2 from "../../assets/Images/Blogs/Rectangle 133.png";

const Section5 = ({ section5Props }) => {
  return (
    <div className="blogs-section5">
      <h1 className="latest-post-heading"> Latest Post</h1>
      <div className="blogs-section5-top">
        <div className="blogs-section5-top-left">
          <img src={img1} alt="" />
        </div>
        <div className="blogs-section5-top-right">
          <h1>
            <span style={{ color: "var(--secondary)" }}>
              {section5Props.headingPart1}&nbsp;
            </span>
            <span style={{ color: "var(--primary)" }}>
              {section5Props.headingPart2}
            </span>
          </h1>
          <p>{section5Props.para}</p>
          <button>View More</button>
        </div>
      </div>
      <div className="blogs-section5-bottom">
        <div className="blogs-section5-bottom-left">
          <h1>
            <span style={{ color: "var(--secondary)" }}>
              {section5Props.headingPart1}&nbsp;
            </span>
            <span style={{ color: "var(--primary)" }}>
              {section5Props.headingPart2}
            </span>
          </h1>
          <p>{section5Props.para}</p>
          <button>View More</button>
        </div>
        <div className="bottom-right">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section5;
