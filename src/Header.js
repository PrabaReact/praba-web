import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Header = () => {
  return (
    <>
      <div className="heading">
        <p>Hello, Wellcome...</p>
        <h1>
          My Name Is Prabakaran Periyasamy.
          <br /> React Developer.
        </h1>
        <a href="#about" className="btn-about">
          About me <ArrowForwardIcon className="forward" />
        </a>
      </div>
    </>
  );
};

export default Header;