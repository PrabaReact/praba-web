import React from "react";


const Experience = () => {
  return (
    <div className="exp" id="exp">
      <div className="exp-img">
        <span></span>
        <h1>My Experience</h1>
        <br />
        <h3>i'm Also Fresher, 7 Months Training Experience Only.</h3>
        <br  />
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/24/programming-593312_1280.jpg"
          width="70%"
          height="70%"
          alt="coding"
        />
      </div>
      <div className="exp-side">
        <div className="exp-side-inner">
          <h2>REACT </h2>
          <div className="con">
            <h2>(NPM, GitHub and VsCode)</h2>
            <p>Command Over Developing React JS Components, Virtual Dom and Work Flows. User Interface Design and Development. Restful API Development and Deployment.</p>
          </div>
        </div>
        <div className="exp-side-inner">
          <h2>JAVA </h2>
          <div className="con">
            <h2>(JSP, Servlet, ApacheTomCat and Eclipse)</h2>
            <p>Good Knowledge of OOPs concept like Abstraction, Encapsulation, Polymorphism, Inheritance. Good Knowledge in Exception Handling and Written custom Exception. Good Practical Knowledge of Collections, Framework and Data Structures like List, Set, Map and Queue.</p>
          </div>
        </div>
        <div className="exp-side-inner">
          <h2>MYSQL </h2>
          <div className="con">
            <h2>(MySql WorkBench and Driver)</h2>
            <p>
            Good Understanding in RDBMS concepts. Comfortable in writing SQL statements like DDL, DML, TCL, DCL and DQL. Implemented Joins and Sub queries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
