import React from "react";

// Define constants
const STAR_CLASS = "fas fa-star";

// Define mappings
const numStarsToLevel = {
  1: "Easy",
  2: "Medium",
  3: "Hard",
  4: "Expert",
};

const Stars = (props) => {
  let { numStars } = props;

  return (
    <div className="stars-wrapper">
      <span className={STAR_CLASS}></span> {numStarsToLevel[numStars]}
    </div>
  );
};

export default Stars;