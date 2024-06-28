import React from "react";

import KeyFeatures from "./KeyFeatures";

const LearnMore: React.FC = () => {
  return (
    <div id="learn-more" className="learn-more">
      <h1>
        Welcome to{" "}
        <span className="logo" style={{ fontSize: "2rem" }}>
          InvestingMadeEasy
        </span>
      </h1>
      <p className="white-paragraph">
        I've designed a website to empower investors with comprehensive tools
        for informed decision-making. Whether you're a seasoned trader or just
        beginning your investment journey, our website offers a seamless
        experience tailored to your needs.
      </p>
      <h1>Key Features:</h1>
      <KeyFeatures />
      <p className="white-paragraph">
        Whether you're looking to build wealth over the long term or seize
        short-term opportunities, our platform equips you with the tools and
        insights needed to navigate the markets effectively. Start optimizing
        your investment strategy today with our powerful stock screener and
        portfolio management tools.
      </p>
    </div>
  );
};

export default LearnMore;
