import React from "react";
import TypedSection from "../../components/TypedSection";

const Homepage: React.FC = () => {
  return (
    <div className="flex small-margin-top">
      <TypedSection />
      <div className="chart-container">
        <img src="images/bull.png" />
      </div>
    </div>
  );
};

export default Homepage;
