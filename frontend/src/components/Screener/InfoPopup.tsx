import React, { useState, useEffect, useRef } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";

interface InfoPopupProps {
  title: string;
  info: string;
}

const InfoPopup: React.FC<InfoPopupProps> = ({ title, info }) => {
  const [isVisible, setIsVisible] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target as Node) &&
      iconRef.current &&
      !iconRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  const makeVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div ref={iconRef}>
        <FaRegCircleQuestion className="popup-button" onClick={makeVisible} />
      </div>
      {isVisible && (
        <div className="popup-content" ref={popupRef}>
          <h2>{title}</h2>
          <p>{info}</p>
        </div>
      )}
    </div>
  );
};

export default InfoPopup;
