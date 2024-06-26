import React from "react";
import { Link } from "react-scroll";
import { FiChevronsDown } from "react-icons/fi";

const LearnMoreButton: React.FC = () => {
  return (
    <div>
      <Link to="learn-more" smooth={true} duration={500} offset={-100}>
        <div className="learn-more-button flex center-align column">
          <div>Click to Learn More</div>
          <FiChevronsDown size={20} />
        </div>
      </Link>
    </div>
  );
};

export default LearnMoreButton;
