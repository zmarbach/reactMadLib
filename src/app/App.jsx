import React from 'react';
import './App.css';
import { AccountEditor } from './AccountEditor';
import { AccountDashboard } from './AccountDashboard';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { MadLibDrill } from './MadLibDrill';

function App() {
  return <>
    <Router>
      <Switch>
          <Route path="/madlib" component = { MadLibDrill } />
          <Route path="/new" component = { AccountEditor}/> 
          <Route path="/edit/:accountId" component={ AccountEditor } />
          <Route path="/" component={ AccountDashboard } />
          
      </Switch>
    </Router>
  </>;
}

export default App;
