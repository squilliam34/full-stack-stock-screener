import React from "react";
import { TypedSection, LearnMoreButton } from "../../components/homepage";

const Homepage: React.FC = () => {
  return (
    <div>
      <video autoPlay muted loop className="video-background">
        <source src="videos/stock-chart.mp4" type="video/mp4" />
      </video>
      <div className="flex column center-align">
        <TypedSection />
        <LearnMoreButton />
      </div>
    </div>
  );
};

export default Homepage;
