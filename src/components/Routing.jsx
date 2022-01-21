import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './LogIn';

export default function Routing() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/login' component={LogIn} />
                </Switch>
            </Router>
        </div>
    );
        
}
