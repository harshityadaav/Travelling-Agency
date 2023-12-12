import "../../Style/Blog/Section2.css";
import img1 from "../../assets/Images/Blog/Rectangle 311.png";
import img2 from "../../assets/Images/Blog/Rectangle 312.png";
import img3 from "../../assets/Images/Blog/Rectangle 313.png";
import img4 from "../../assets/Images/Blog/Rectangle 314.png";
import img5 from "../../assets/Images/Blog/Rectangle 129.png";
const Section2 = ({ section2Props }) => {
  return (
    <div className="blog-section2">
      <div className="blog-section2-left">
        <h1>{section2Props.headingleft}</h1>
        <p>{section2Props.para1}</p>
        <p>{section2Props.para1}</p>
        <img src={img1} alt="" />
        <h1>{section2Props.headingleft}</h1>
        <p>{section2Props.para3}</p>
        <p>{section2Props.para3}</p>
        <p>{section2Props.para1}</p>
        <img src={img2} alt="" />
        <h1>{section2Props.headingleft}</h1>
        <p>{section2Props.para3}</p>
        <p>{section2Props.para1}</p>
        <img src={img3} alt="" />
        <h1>{section2Props.headingleft}</h1>
        <p>{section2Props.para1}</p>
        <img src={img4} alt="" />
        <p>{section2Props.para1}</p>
        <p>{section2Props.para3}</p>
      </div>
      <div className="blog-section2-right">
        <h1>Latest Post </h1>
        <div className="latest-post-card">
          <img src={img5} alt="" />
          <h1>
            <span style={{ color: "var(--secondary)" }}>
              {section2Props.headingPart1}&nbsp;
            </span>
            <span style={{ color: "var(--primary)" }}>
              {section2Props.headingPart2}
            </span>
          </h1>
          <p>{section2Props.para1}</p>
          <button>View More</button>
        </div>
        <div className="latest-post-card">
          <img src={img5} alt="" />
          <h1>
            <span style={{ color: "var(--secondary)" }}>
              {section2Props.headingPart1}&nbsp;
            </span>
            <span style={{ color: "var(--primary)" }}>
              {section2Props.headingPart2}
            </span>
          </h1>
          <p>{section2Props.para1}</p>
          <button>View More</button>
        </div>
        <div className="latest-post-card">
          <img src={img5} alt="" />
          <h1>
            <span style={{ color: "var(--secondary)" }}>
              {section2Props.headingPart1}&nbsp;
            </span>
            <span style={{ color: "var(--primary)" }}>
              {section2Props.headingPart2}
            </span>
          </h1>
          <p>{section2Props.para1}</p>
          <button>View More</button>
        </div>
        <div className="latest-post-card">
          <img src={img5} alt="" />
          <h1>
            <span style={{ color: "var(--secondary)" }}>
              {section2Props.headingPart1}&nbsp;
            </span>
            <span style={{ color: "var(--primary)" }}>
              {section2Props.headingPart2}
            </span>
          </h1>
          <p>{section2Props.para1}</p>
          <button>View More</button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
