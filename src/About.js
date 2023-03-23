import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import pic from "./images/one.jpg";



const About = () => {
  return (
    <div className="about" id="about">
      <div className="inner-about">
       <img src={pic} alt="jpg" />
      </div>
      <div className="inner-about2">
        <span className="brdr"></span>
        <h1>About me</h1>
        <p>
        Hi, This is Prabakaran and i'm a FullStack Developer.
        </p>
        <span className="para">
        I have completed my Bachelors and Masters Degree from Bharathidasan University Trichy in 2019.
         Due to Covid-19 and some other reasons I am not able to go to work.
         so I am recently complete a FullStack Developer course in Besant Technologies, Chennai. Now, I searching for a Job.
        </span>
         
        <a href="#exp" className="btn-exp">
          Read More <ArrowForwardIcon className="forward" />
        </a>
    
      </div>
    </div>
  );
};
export default About;
