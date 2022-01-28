import React from 'react';
import  { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import AthletixHome from './AthletixHome/AthletixHome';
import GxtremeHome from './GxtremeHome/GxtremeHome';
import Provider from './provider/provider';

const App = () => {
  return (
        <Provider>
            <Router>
                <Switch>
                    <Route path = "/" exact={true} component={Homepage} />
                    <Route exact path = "/athletix" component={AthletixHome} />  
                    <Route exact path = "/gxtreme" component={GxtremeHome} />  
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
