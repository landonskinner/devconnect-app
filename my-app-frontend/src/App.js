import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import AccountPage from './components/AccountPage';
import FavoritesPage from './components/FavoritesPage';
import SearchBar from './components/SearchBar';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import RegistrationPage from './components/RegistrationPage';
import HomePage from './components/HomePage';


function App() {
  const [search, setSearch] = useState("")
  const [loginId, setLoginId] = useState('')

  function handleSearch(newSearch){
    setSearch(newSearch)
  }

  const handleLogin = (login) => {
    setLoginId(login[0].id)
  }

  console.log(loginId)

  return (
<div className="App">
  <Switch>
    <Route exact path="/">
      <LandingPage handleLogin={handleLogin} />
    </Route>
    <Route path="/register">
      <RegistrationPage handleLogin={handleLogin} />
    </Route>
    <Route path="/home">
      <SearchBar onSearch={handleSearch} />
      <HomePage/>
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
