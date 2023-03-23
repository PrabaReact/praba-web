import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Animated from "./Animated";

const Skill = () => {
  return (
    <div className="skill" id="skill">
      <span></span>
      <h1>My Skills</h1>
      <Carousel controls={true}>
        <Carousel.Item>
          <div className="circular">
            <div className="circle">
            <Animated value={97} />
              <p>HTML</p>
            </div>
            <div className="circle">
              <Animated value={95} />
              <p>CSS</p>
            </div>
            <div className="circle">
              <Animated value={80} />
              <p>JavaScript</p>
            </div>
            <div className="circle">
              <Animated value={85} />
              <p>React</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="circular">
            <div className="circle">
              <Animated value={96} />
              <p>Bootstrap</p>
            </div>
            <div className="circle">
              <Animated value={90} />
              <p>Java</p>
            </div>
            <div className="circle">
              <Animated value={87} />
              <p>MySql</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Skill;
