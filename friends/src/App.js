import React from 'react';
import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { Login } from './Login/Login';
import { FriendsList } from './Dashboard/FriendsList';
import './App.css';

function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  )
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
