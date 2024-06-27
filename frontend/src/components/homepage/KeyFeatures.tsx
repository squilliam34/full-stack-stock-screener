import React, { useState } from "react";

const KeyFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState("feature1");

  const renderContent = () => {
    switch (activeFeature) {
      case "feature1":
        return (
          <p>
            Stock Screener: Easily filter through thousands of stocks using
            customizable criteria such as market cap, P/E ratio, dividend yield,
            and more. Find the perfect investments that match your unique
            strategy and goals.
          </p>
        );
      case "feature2":
        return (
          <p>
            Portfolio Tracker: Monitor the performance of your investments in
            real-time. Track portfolio value, asset allocation, and historical
            returns effortlessly. Gain actionable insights into your holdings'
            performance over time.
          </p>
        );
      case "feature3":
        return (
          <p>
            Personalized Recommendations: Receive intelligent stock
            recommendations based on your portfolio composition, risk tolerance,
            and investment preferences. Discover new opportunities aligned with
            your financial objectives.
          </p>
        );
      case "feature4":
        return (
          <p>
            Secure Account Management: Sign in securely to access your
            personalized dashboard, where your portfolio data and preferences
            are safely stored and updated in real-time.
          </p>
        );
      default:
        return <p>Select a feature to see more details.</p>;
    }
  };

  return (
    <div className="key-features">
      <nav className="key-features-nav">
        <ul className="key-features-list">
          <li
            className={`key-features-item ${
              activeFeature === "feature1" ? "active" : ""
            }`}
            onClick={() => setActiveFeature("feature1")}
          >
            Stock Screener
          </li>
          <li
            className={`key-features-item ${
              activeFeature === "feature2" ? "active" : ""
            }`}
            onClick={() => setActiveFeature("feature2")}
          >
            Portfolio Tracker
          </li>
          <li
            className={`key-features-item ${
              activeFeature === "feature3" ? "active" : ""
            }`}
            onClick={() => setActiveFeature("feature3")}
          >
            Personalized Recommendations
          </li>
          <li
            className={`key-features-item ${
              activeFeature === "feature4" ? "active" : ""
            }`}
            onClick={() => setActiveFeature("feature4")}
          >
            Secure Account Management
          </li>
        </ul>
      </nav>
      <div className="key-features-content">{renderContent()}</div>
    </div>
  );
};

export default KeyFeatures;
