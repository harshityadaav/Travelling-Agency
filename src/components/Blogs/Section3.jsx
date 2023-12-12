import img1 from "../../assets/Images/Blogs/Rectangle 128.png";
import img2 from "../../assets/Images/Blogs/Rectangle 129.png";
import img3 from "../../assets/Images/Blogs/Rectangle 130.png";
import img4 from "../../assets/Images/Blogs/Rectangle 131.png";
import view from "../../assets/Images/Blogs/view-more.svg";
import "../../Style/Blogs/Section3.css";
const Section3 = ({ section3Props }) => {
  return (
    <div>
    <div className="blogs-section3">
      <div className="blogs-section-in2">
        <div className="blogs-sections3">
          <img src={img1} alt="" />
          <div className="blogs-section3-content">
            <h1>
              <span style={{ color: "var(--secondary)" }}>
                {section3Props.headingPart1}&nbsp;
              </span>
              <span style={{ color: "var(--primary)" }}>
                {section3Props.headingPart2}
              </span>
            </h1>
            <p>{section3Props.para}</p>
            <button>View More</button>
          </div>
        </div>
        <div className="blogs-sections3">
          <img src={img2} alt="" />
          <div className="blogs-section3-content">
            <h1>
              <span style={{ color: "var(--secondary)" }}>
                {section3Props.headingPart1}&nbsp;
              </span>
              <span style={{ color: "var(--primary)" }}>
                {section3Props.headingPart2}
              </span>
            </h1>
            <p>{section3Props.para}</p>
            <button>View More</button>
          </div>
        </div>
      </div>
      <div className="blogs-section-in2">
        <div className="blogs-sections3">
          <img src={img3} alt="" />
          <div className="blogs-section3-content">
            <h1>
              <span style={{ color: "var(--secondary)" }}>
                {section3Props.headingPart1}&nbsp;
              </span>
              <span style={{ color: "var(--primary)" }}>
                {section3Props.headingPart2}
              </span>
            </h1>
            <p>{section3Props.para}</p>
            <button>View More</button>
          </div>
        </div>
        <div className="blogs-sections3">
          <img src={img4} alt="" />
          <div className="blogs-section3-content">
            <h1>
              <span style={{ color: "var(--secondary)" }}>
                {section3Props.headingPart1}&nbsp;
              </span>
              <span style={{ color: "var(--primary)" }}>
                {section3Props.headingPart2}
              </span>
            </h1>
            <p>{section3Props.para}</p>
            <button>View More</button>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="blogs-view-more">
        <p>view more</p>
        <img src={view} alt="" />
      </div> */}
      </div>
  );
};

export default Section3;
