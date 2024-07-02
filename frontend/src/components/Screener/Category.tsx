import React from "react";

interface CategoryProps {
  label: string;
  options: string[];
}

const Category: React.FC<CategoryProps> = ({ label, options }) => {
  return (
    <div>
      <div className="category">{label}</div>
      <select>
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
