import React from "react";
import {
  TypedSection,
  LearnMoreButton,
  LearnMore,
} from "../../components/homepage";

const Homepage: React.FC = () => {
  return (
    <div>
      <div className="flex column">
        <div className="flex" style={{ marginTop: "7rem" }}>
          <TypedSection />
          <div className="video-section">
            <video autoPlay muted loop className="video">
              <source src="videos/stock-chart.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <LearnMoreButton />
      </div>
      <LearnMore />
    </div>
  );
};

export default Homepage;
