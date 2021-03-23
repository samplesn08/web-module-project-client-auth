import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { FriendsList } from './components/Dashboard/FriendsList';
import { PrivateRoute } from './utilities/PrivateRoute';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Link to='/'>Home</Link> <br></br>
        <Link to='/friendslist'>Access Friends</Link><br></br>
        <Route path='/'/>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/friendslist' component={FriendsList}/>
      </Router>
    </div>
  );
}

export default App;
