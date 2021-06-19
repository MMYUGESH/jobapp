import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Companies from "./Components/Companies";
import Elogin from "./Components/Elogin";
import Recruiters from "./Components/Recruiters";

function App() {
  const loggedIn = sessionStorage.getItem("loggedin");
  const EloggedIn = sessionStorage.getItem("Employerloggedin");
  console.log(loggedIn);
  return (
    <div>
      <NavBar />
      <Router>
        <div>
          <Route path="/home" exact component={Home} />
          <Route path="/companies" strict exact render={() => ((loggedIn) ? (<Companies />) : (<Redirect to="/login" />))} />
          <Route path="/rec" strict exact render={() => ((loggedIn) ? (<Recruiters />) : (<Redirect to="/elogin" />))} />
          <Route path="/login" exact component={Login} />
          <Route path="/elogin" exact component={Elogin} />
        </div>
      </Router>
    </div>
  )
}

export default App;

