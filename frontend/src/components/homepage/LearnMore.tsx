import React from "react";

const LearnMore: React.FC = () => {
  return (
    <div id="learn-more" className="learn-more">
      <h1>
        Welcome to{" "}
        <span className="logo" style={{ fontSize: "2rem" }}>
          InvestingMadeEasy
        </span>
      </h1>
      <p className="paragraph-body">
        I've designed a website to empower investors with comprehensive tools
        for informed decision-making. Whether you're a seasoned trader or just
        beginning your investment journey, our website offers a seamless
        experience tailored to your needs.
      </p>
      <div className="bullet-point">
        Key Features:
        <ul>
          <li>
            Stock Screener: Easily filter through thousands of stocks using
            customizable criteria such as market cap, P/E ratio, dividend yield,
            and more. Find the perfect investments that match your unique
            strategy and goals.
          </li>
          <li>
            Portfolio Tracker: Monitor the performance of your investments in
            real-time. Track portfolio value, asset allocation, and historical
            returns effortlessly. Gain actionable insights into your holdings'
            performance over time.
          </li>
          <li>
            Personalized Recommendations: Receive intelligent stock
            recommendations based on your portfolio composition, risk tolerance,
            and investment preferences. Discover new opportunities aligned with
            your financial objectives.
          </li>
          <li>
            Secure Account Management: Sign in securely to access your
            personalized dashboard, where your portfolio data and preferences
            are safely stored and updated in real-time.
          </li>
        </ul>
      </div>
      <p className="paragraph-body">
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
