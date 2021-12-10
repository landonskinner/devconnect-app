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
  const [loginId, setLoginId] = useState('')
  

  function handleSearch(newSearch){
    console.log(newSearch)
    setSearch(newSearch)
  }

  const handleLogin = (login) => {
    fetch(`http://localhost:9292/users/${login[0].id}`)
    .then(resp => resp.json())
    .then(data => {
      const newObj = {...data[0],last_active: new Date()}
    fetch(`http://localhost:9292/users/${login[0].id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newObj),
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    } 
    )
    
    setLoginId(login[0].id)
  }

  useEffect(() => {
    fetch('http://localhost:9292/favorites')
    .then(resp => resp.json())
    .then(data => data)
  })

  fetch('http://localhost:9292/users/active')
    .then(resp => resp.json())
    .then(data => setLoginId(data.id))

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
      <AccountPage search={search} loginId={loginId} setLoginId={setLoginId}/>
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
