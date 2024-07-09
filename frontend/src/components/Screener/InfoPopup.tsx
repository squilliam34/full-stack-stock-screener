import React, { useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";

interface InfoPopupProps {
  title: string;
  info: string;
}

const InfoPopup: React.FC<InfoPopupProps> = ({ title, info }) => {
  const [isVisible, setIsVisible] = useState(false);

  const makeVisibile = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <FaRegCircleQuestion className="popup-button" onClick={makeVisibile} />
      {isVisible && (
        <div className="popup-content">
          <h2>{title}</h2>
          <p>{info}</p>
        </div>
      )}
    </div>
  );
};

export default InfoPopup;
