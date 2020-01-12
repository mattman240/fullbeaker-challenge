import React, { useState } from 'react';

import Categories from './Categories';
import PerPage from './PerPage';
import SearchBar from './SearchBar';

const Filters = ({ onSelect, onSearch, onPerPageChange, setIsLoading }) => {
  const [category, setCategory] = useState('');
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    setIsLoading(true);
    onPerPageChange(perPage);
    onSearch(search);
    onSelect(category);
  };

  return (
    <div
      style={{
        border: '2px solid black',
        borderBottomWidth: '1px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <SearchBar onSearch={setSearch} />
      <div style={{ display: 'flex' }}>
        <Categories onSelect={setCategory} />
        <PerPage onSelect={setPerPage} />
      </div>
      <button
        style={{
          backgroundColor: 'lightGrey',
          border: '1px solid black',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '15px',
          height: '40px',
          margin: '10px',
          outline: 0,
        }}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Filters;
