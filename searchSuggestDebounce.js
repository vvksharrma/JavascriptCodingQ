import React, { useState } from 'react';
import debounce from 'lodash/debounce'; // Using lodash debounce utility

const AutocompleteSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Debounced search function
  const debouncedSearch = debounce(async (query) => {
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    try {
      // Simulated API call to fetch search results
      const response = await fetch(`https://api.example.com/search?q=${query}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }, 300); // Debounce delay of 300ms

  // Handle input change
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AutocompleteSearch;
