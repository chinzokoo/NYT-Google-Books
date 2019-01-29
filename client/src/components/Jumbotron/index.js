import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "blue" }}
      className="jumbotron"
    >
      <img src="./logo.jpg" alt="google-logo" style={{ height: "200px" }} />
    </div>
  );
}

export default Jumbotron;