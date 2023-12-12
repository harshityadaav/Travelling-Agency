import "../../Style/Blogs/Section2.css";
import tik from "../../assets/Images/Blogs/mdi_tick.svg";

const Section2 = ({ section2Props }) => {
  return (
    <div className="blogs-section2">
      <div className="blogs-sections">
        <img src={tik} alt="" />
        <h1>
          <span style={{ color: "var(--secondary)" }}>
            {section2Props.headingPart1}
          </span>{" "}
          <span style={{ color: "var(--p-dark)" }}>
            {section2Props.headingPart2}
          </span>
        </h1>
        <p>{section2Props.para}</p>
      </div>
      <div className="blogs-sections">
        <img src={tik} alt="" />
        <h1>
          <span style={{ color: "var(--secondary)" }}>
            {section2Props.headingPart1}
          </span>{" "}
          <span style={{ color: "var(--p-dark)" }}>
            {section2Props.headingPart2}
          </span>
        </h1>
        <p>{section2Props.para}</p>
      </div>
      <div className="blogs-sections">
        <img src={tik} alt="" />
        <h1>
          <span style={{ color: "var(--secondary)" }}>
            {section2Props.headingPart1}
          </span>{" "}
          <span style={{ color: "var(--p-dark)" }}>
            {section2Props.headingPart2}
          </span>
        </h1>
        <p>{section2Props.para}</p>
      </div>
    </div>
  );
};

export default Section2;
