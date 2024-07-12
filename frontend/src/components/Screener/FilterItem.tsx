import React, { useState } from "react";
import Category from "./Category";

interface FilterType {
  label: string;
  options: string[];
  info: string;
}

interface FilterItemProps {
  title: string;
  categories: FilterType[];
  onFilterChange: (category: string, value: string) => void;
}

const FilterItem: React.FC<FilterItemProps> = ({
  title,
  categories,
  onFilterChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex">
        <h2 className="category-header">{title}</h2>
        <span onClick={toggleDropdown} className="filter-dropdown">
          {isOpen ? "▾" : "▸"}
        </span>
      </div>
      {isOpen && (
        <div>
          {categories.map((category, index) => (
            <Category
              key={index}
              label={category.label}
              options={category.options}
              onChange={(e) =>
                onFilterChange(
                  category.label
                    .replace(" ", "")
                    .replace("/", "")
                    .toLowerCase(),
                  e.target.value
                )
              }
              info={category.info}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterItem;
