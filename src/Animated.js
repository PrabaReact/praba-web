import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

const Animated = (props) => {
  console.log(props.value);
  return (
    <>
      <AnimatedProgressProvider
        className="circle"
        valueStart={0}
        valueEnd={props.value}
        duration={3}
        easingFunction={easeQuadInOut}
      >
        {(value) => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({
                pathTransition: "none",
                trailColor: "#fff",
                pathColor: "#f55c47",
                textColor: "#f55c47"
              })}
            />
          );
        }}
      </AnimatedProgressProvider>
    </>
  );
};
export default Animated;


