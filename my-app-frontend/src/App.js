import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import AccountPage from './components/AccountPage';
import FavoritesPage from './components/FavoritesPage';
import SearchBar from './components/SearchBar';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';


function App() {
  const [search, setSearch] = useState("")

  function handleSearch(newSearch){
    setSearch(newSearch)
  }
  return (
    <div className="App">
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/home">
        <SearchBar onSearch={handleSearch} />
        {/* add home page when present */}
      </Route>
      <Route path="/account">
        <AccountPage name="Landon" search={search} />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
