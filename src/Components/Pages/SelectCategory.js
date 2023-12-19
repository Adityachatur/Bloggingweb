import React from 'react';

const SelectCategory = ({ onSeleactCategorychnage, selectedcategory, Activecategory }) => {
  const categories = ["Health", "Sport", "Startups", "AI", "Security", "Enterprise", "Growth", "Apps", "IT"];

  return (
    <div className='flex justify-center flex-wrap mx-5 my-6 leading-7 lg:space-x-4  md:space-x-3 space-x-2'>
      <button onClick={() => onSeleactCategorychnage(null)} className={`${Activecategory === null ? "Active-Button" : ""} mr-2`}>All</button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSeleactCategorychnage(category)}
          className={`${Activecategory === category ? "Active-Button" : ""} mr-2`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default SelectCategory;
