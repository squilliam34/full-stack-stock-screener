import React from "react";

interface CategoryProps {
  label: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Category: React.FC<CategoryProps> = ({ label, options, onChange }) => {
  return (
    <div>
      <div className="category">{label}</div>
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
