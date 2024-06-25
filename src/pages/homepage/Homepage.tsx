import React from "react";
import TypedSection from "../../components/TypedSection";

const Homepage: React.FC = () => {
  return (
    <div className="flex small-margin-top">
      <video autoPlay muted loop className="video-background">
        <source src="videos/stock-chart.mp4" type="video/mp4" />
      </video>
      <TypedSection />
    </div>
  );
};

export default Homepage;
