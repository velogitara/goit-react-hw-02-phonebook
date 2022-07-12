import React from 'react';

const Filter = ({ title, filter }) => {
  return (
    <div>
      <h3>{title}</h3>
      <label>
        <input type="text" placeholder="add something" onChange={filter} />
      </label>
    </div>
  );
};

export default Filter;
