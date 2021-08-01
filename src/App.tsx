import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path='/hotels'>
          <Hotels />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
