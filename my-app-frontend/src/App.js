import React, { useState, useEffect } from 'react';
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
  const [loginId, setLoginId] = useState(52)

  function handleSearch(newSearch){
    console.log(newSearch)
    setSearch(newSearch)
  }

  const handleLogin = (login) => {
    setLoginId(login[0].id)
  }

  useEffect(() => {
    fetch('http://localhost:9292/favorites')
    .then(resp => resp.json())
    .then(data => console.log(data))
  })


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
      <SearchBar  search={search} onSearch={handleSearch}/>
      <HomePage search={search} loginId={loginId}/>
    </Route>
    <Route path="/account">
      <SearchBar  search={search} onSearch={handleSearch}/>
      <AccountPage name="Landon" search={search} loginId={loginId}/>
    </Route>
    <Route path="/favorites">
      <SearchBar  search={search} onSearch={handleSearch}/>
      <FavoritesPage search={search} loginId={loginId}/>
    </Route>
  </Switch>
</div>
  );
}

export default App;
