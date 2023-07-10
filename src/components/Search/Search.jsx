import React from 'react'
import './Search.css'
import { useState } from 'react';
const Search = ({value,handleChange}) => {
  
  return (
    <div className='search'>
       <select
           value={value} onChange={handleChange}
          className='search-select'
        >
          <option value=''>Wybierz kategorię</option>
          <option value='Spożywka'>Spożywka</option>
          <option value='Rozrywka'>Rozrywka</option>
          <option value='AGD'>AGD</option>
          <option value='Opłaty'>Opłaty</option>
          <option value='Media'>Media</option>
          <option value='Inne'>Inne</option>
        </select>
       
       
       
       
      
    </div>
  )
}
/*const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <SearchInput value={searchValue} onChange={handleSearchInputChange} />
    </div>
  );*/
  /*const filteredData = data.filter((item) =>
  item.name.toLowerCase().includes(searchValue.toLowerCase())
  );*/
  
export default Search
