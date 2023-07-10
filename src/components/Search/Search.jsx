import React from 'react'
import './Search.css'
const Search = ({ searchValue, setSearchValue, placeholder }) => {
  return (
    <div className='search'>
      <input
        className='search-input'
        type='search'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={placeholder}
        autoFocus
      />
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
