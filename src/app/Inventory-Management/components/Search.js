'use client'
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <div className="flex items-center bg-white p-4 rounded-md shadow">
      <input
        type="text"
        className="w-full px-4 py-2 border rounded-md"
        placeholder="Search"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
