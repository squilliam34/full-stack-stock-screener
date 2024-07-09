import React from "react";
import InfoPopup from "./InfoPopup";

interface CategoryProps {
  label: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  info: string;
}

const Category: React.FC<CategoryProps> = ({
  label,
  options,
  onChange,
  info,
}) => {
  return (
    <div>
      <div className="flex">
        <div className="category">{label}</div>
        <InfoPopup title={label} info={info} />
      </div>

      <select onChange={onChange}>
        <option value="">--Select--</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
