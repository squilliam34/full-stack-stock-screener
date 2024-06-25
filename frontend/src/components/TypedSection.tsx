import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const TypedSection: React.FC = () => {
  const header = "Want an easy way to find stocks?";
  const paragraph =
    "I've got the solution for you. By signing up, you'll get access to a stock screener, a portfolio performance tracker, and recommendations for you based on your portfolio. I've done all the hard work for you, so make your life a little easier and take advantage of the all-in-one tool I've built.";

  const [typeHeader] = useTypewriter({
    words: [header],
    typeSpeed: 25,
  });

  const [typeParagraph] = useTypewriter({
    words: [paragraph],
    typeSpeed: 40,
  });

  return (
    <div className="section">
      <h1 className="header typing-header">{typeHeader}</h1>
      <p className="paragraph-body typing">{typeParagraph}</p>
    </div>
  );
};

export default TypedSection;
