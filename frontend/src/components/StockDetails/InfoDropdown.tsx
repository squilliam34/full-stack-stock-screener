import React, { useState } from "react";

interface Entry {
  field: string;
  value: string | number;
}

interface InfoDropdownProps {
  title: string;
  entries: Entry[];
}

const InfoDropdown: React.FC<InfoDropdownProps> = ({ title, entries }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex">
        <h1>{title}</h1>
        <span onClick={toggleDropdown} className="filter-dropdown">
          {isOpen ? "▾" : "▸"}
        </span>
      </div>
      {isOpen &&
        entries.map((entry) => (
          <div className="flex">
            <div>{entry.field}</div>
            {": "} <div>{entry.value}</div>
          </div>
        ))}
    </div>
  );
};

export default InfoDropdown;
