import React, { useState } from 'react';
import './App.css';
import AccountPage from './components/AccountPage';
import FavoritesPage from './components/FavoritesPage';
import SearchBar from './components/SearchBar';

function App() {
  const [search, setSearch] = useState("")

  function handleSearch(newSearch){
    setSearch(newSearch)
  }
  return (
    <div className="App">
    <SearchBar onSearch={handleSearch} />
      <AccountPage name="Landon" search={search} />
      <FavoritesPage />
    </div>
  );
}

export default App;
