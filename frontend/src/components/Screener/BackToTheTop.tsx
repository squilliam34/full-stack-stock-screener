import React from "react";
import { Link } from "react-scroll";
import { FaAngleDoubleUp } from "react-icons/fa";

const BackToTheTop: React.FC = () => {
  return (
    <div>
      <Link
        to="instructions"
        smooth={true}
        duration={250}
        offset={-500}
        style={{ margin: "15px" }}
      >
        <div className="flex column center-align pointer">
          <FaAngleDoubleUp size={20} />
          <div>Click to return to the top</div>
        </div>
      </Link>
    </div>
  );
};

export default BackToTheTop;
