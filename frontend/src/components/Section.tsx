import React from "react";

interface ParagraphProps {
  header1: string;
  paragraph: string;
}

const Section: React.FC<ParagraphProps> = ({ header1, paragraph }) => {
  return (
    <div className="section">
      <h1 className="header">{header1}</h1>
      <p className="paragraph-body">{paragraph}</p>
    </div>
  );
};

export default Section;
