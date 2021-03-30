import React from "react";
import AccountsHead from "./components/Accountshead";
import Submitted from './components/Submitted';
import {Route} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Route exact path="/">
        <AccountsHead />
      </Route>
      <Route path="/Submitted">
        <Submitted />
      </Route>
    </React.Fragment>
  );
};

export default App;
