import React from "react";
import calamardo from "../assets/calamardo.gif"

function Skills() {
  return (
    <div>
      <div
        className="radial-progress text-primary"
        style={{ "--value": 70 }}
        role="progressbar"
      >
        70%
      </div>
      <div
        className="radial-progress text-primary"
        style={{ "--value": 30 }}
        role="progressbar"
      >
        30%
      </div>
      <div
        className="radial-progress text-primary"
        style={{ "--value": 50 }}
        role="progressbar"
      >
        50%
      </div>
    </div>
  );
}

export default Skills;
