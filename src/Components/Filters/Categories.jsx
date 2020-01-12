import React from 'react';

const Categories = ({ onSelect }) => {
  const options = [
    'Animals',
    'Backgrounds',
    'Buildings',
    'Business',
    'Computer',
    'Education',
    'Fashion',
    'Feelings',
    'Food',
    'Health',
    'Industry',
    'Music',
    'Nature',
    'People',
    'Places',
    'Religion',
    'Science',
    'Sports',
    'Transportation',
    'Travel',
  ];
  return (
    <select
      defaultValue=""
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
      <option value="disabled" disabled>
        Category
      </option>
      <option value="">All</option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Categories;
