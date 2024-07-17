import React from "react";
import { Link } from "react-scroll";
import { FaAngleDoubleUp } from "react-icons/fa";

const BackToTheTop: React.FC = () => {
  return (
    <div className="bttt-square">
      <Link
        to="instructions"
        smooth={true}
        duration={250}
        offset={-500}
        style={{ margin: "15px" }}
      >
        <div className="flex column center-align pointer">
          <FaAngleDoubleUp size={20} className="chevrons" />
        </div>
      </Link>
    </div>
  );
};

export default BackToTheTop;
