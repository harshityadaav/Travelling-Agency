import "../../Style/Packages/New&Articles.css";
import { Fade } from "react-awesome-reveal";
import FAQ from "./FAQ"

const NewsArticles = ({ newsdata }) => {

  return (
    <section className="gallary_newsarticle_section">
      <div className="gallary_newsarticle_top" data-aos="fade-up" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
       
          <h1 className="heading  c_primary">
            <b>News & Articles</b>
          </h1>
     
      </div>
      <div className="gallary_newsarticle_middle">
        <div className="gallary_newsarticle_middle_left" data-aos="fade-right" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
         
            <h1 className="heading_light c_primary">
              <b>
                {newsdata.fheading}{" "}
                <span className="c_secondary">{newsdata.lheading}</span>
              </b>
            </h1>
            <p className="c_primary">
              {newsdata.text} <br /><br />
              {newsdata.text} <br /><br />
              {newsdata.text} <br /><br />
              {newsdata.text} <br /><br />
              {newsdata.text}
            </p>

         
        </div>
        <div className="gallary_newsarticle_middle_right">
          <div className="gallary_newsarticle_middle_right_top" data-aos="fade-left" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
           
              <img src={newsdata.image} alt="" />
           
          </div>
          <div className="gallary_newsarticle_middle_right_bottom" data-aos="fade-left" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
            
              <h1 className="heading_light c_primary">
                <b>
                  {newsdata.fheading}{" "}
                  <span className="c_secondary">{newsdata.lheading}</span>
                </b>
              </h1>
              <p className="c_primary">
                {newsdata.text} <br /><br />
                {newsdata.text}
              </p>
          
          </div>
        </div>
      </div>
      <div className="gallary_newsarticle_bottom">
        <div className="gallary_newsarticle_bottom_top" data-aos="fade-up" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
      
            <h1 className="heading c_primary">
              <b>
                <span className="c_secondary">Frequently</span> Asked Question
              </b>
            </h1>
          
        </div>
        <FAQ />
      </div>

    </section>
  );
};

export default NewsArticles;
