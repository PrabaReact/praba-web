import React from "react";

const Card = (props) => {
  return (
    <div>
      <div class="card">
        <img src={props.img} class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.text}</p>
          <a href={props.href} target="_blank" class="btn btn-primary">
            View on Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;