


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todolist from "./Components/TodoList";
import Profile from "./Components/Profile";
import Home from "./Components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/todolist">Todolist</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/profile/:id" render={() => <Profile />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/todolist" render={() => <Todolist />} />
          <Route path="/" render={() => <div>Erreur</div>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;



/*MA VERSION DE EXO///////////////////////////////////////////
// Route is the conditionally shown component based on matching a path to a URL.

// Switch returns only the first matching route rather than all matching routes.
import {
  BrowserRouter as Router,Link, Route, Switch} from 'react-router-dom';
import React from 'react';
import Home from './Components/Home';
import Profile from './Components/Profile';
import TodoList from './Components/TodoList';
import FormInput from './Components/FormInput';
import 'bootstrap/dist/css/bootstrap.min.css';





// We give each route either a target `component`, or we can send functions in `render` or `children` 
// that return valid nodes. `children` always returns the given node whether there is a match or not.
const App = () => {

  return (
  <Router>
    <div>
      <ul>
        <li>  <Link to="/">Home</Link>{' '}</li>
        <li><Link to={{pathname: '/Profile/:username'}}>Profile</Link>{' '}</li>
        <li><Link to="/TodoList">TodoList</Link></li>
      </ul>
      <Switch>
      <Route exact path="/" component={Home} />
        <Route path="/Profile" component={Profile} />
        <Route path="/TodoList" component ={TodoList} />
         
      
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </Router>
  )
  };
export default App;
*/