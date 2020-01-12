import React from 'react';

const PerPage = ({ onSelect }) => {
  const options = [20, 30, 40, 50];
  return (
    <select
      defaultValue={10}
      style={{
        backgroundColor: 'lightGrey',
        border: '1px solid black',
        cursor: 'pointer',
        fontSize: '15px',
        height: '25px',
        margin: '10px',
        outline: 0,
        width: '50%',
      }}
      onChange={e => onSelect(e.target.value.toLowerCase())}
    >
      <option value="" disabled>
        Per Page
      </option>
      <option value={10}>10</option>
      {options.map(option => (
        <option key={option} value={option}>
          {String(option)}
        </option>
      ))}
    </select>
  );
};

export default PerPage;
