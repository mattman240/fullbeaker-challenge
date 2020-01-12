import React from 'react';

const SearchBar = ({ onSearch }: { onSearch: Function }) => (
  <input
    style={{
      border: '1px solid black',
      borderRadius: '5px',
      fontSize: '15px',
      height: '40px',
      margin: '10px',
      outline: 0,
      padding: '0 10px',
    }}
    placeholder="Keyword..."
    onChange={e => onSearch(e.target.value.trim())}
  />
);

export default SearchBar;
