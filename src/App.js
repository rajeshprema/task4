
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from './Components/UserList';
import CreateUser from './Components/CreateUser';
import EditUser from './Components/EditUser';
import UserProfile from './Components/UserProfile';
import EditProfile from './Components/EditProfile';
function App() {
  return (
  <div className="App">
    
    <Router>
      
        <Route path="/users" component={UserList} exact />
        <Route path="/create-user" component={CreateUser} />
        <Route path="/edit-user/:id" component={EditUser} />
        <Route path="/profile/:id" component={UserProfile} />
        <Route path="/edit-profile/:id" component={EditProfile} />
      
    </Router>
  




   </div>
  );
};

export default App;
