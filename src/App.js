import React from 'react';
import  { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import AthletixHome from './AthletixHome/AthletixHome';

const App = () => {
  return (
    <Router>
        <Switch>
            <Route path = "/" exact={true} component={Homepage} />
            <Route exact path = "/athletix" component={AthletixHome} />
            
        </Switch>
    </Router>
);
};

export default App;
