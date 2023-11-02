import './App.css';
import React, { useState } from 'react';
import Login from './components/Login/login';
import Order from './components/Order/order';

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  }
  const handleLogout = () => {
    setLoggedIn(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        {LoggedIn ? (
          <Order onLogout={handleLogout} />
        ) : (
          <Login onLogin={handleLogin} /> 
        )}
      </header>
    </div>
  );
}

export default App;
