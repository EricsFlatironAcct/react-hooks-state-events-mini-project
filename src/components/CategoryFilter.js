import React, { useState } from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  function handleClick(category) {
    onSelectCategory(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return (
          <button className={category === selectedCategory ? "selected" : ""} key={category} onClick={handleClick.bind(null, category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
