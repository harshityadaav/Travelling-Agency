import React from "react";
import "../../Style/ContactUs/Form.css";
import { Fade } from "react-awesome-reveal";
const Form = ({ isOpen }) => {
  

  return (
    <Fade direction="right">
    <div className="Form-Main">
      <div className="form-content">
        
          <h1>
            <span>Lorem</span> ipsum
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </p>
      </div>
        <form className="form-container">
          <div className="form-group">
            <input type="text" placeholder="Full Name" />
            <input type="tel" placeholder="Phone No" />
            <input type="email" placeholder="E-Mail" />
            <input type="text" placeholder="No of People Travelling" />
            <select>
              <option value="" selected="selected" disabled="disabled">
                Package
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select>
              <option value="" selected="selected" disabled="disabled">
                Budget
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <input type="text" placeholder="Message" className="message" />
            <div className="dateofjourney">
              <label htmlFor="date">Date of Journey</label>
              <input type="date" id="date" />
            </div>
            <button type="submit">Send</button>
          </div>
        </form>
    </div>
    </Fade>
  );
};

export default Form;
