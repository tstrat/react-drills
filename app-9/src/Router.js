import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from './Home';
import Signup from './Signup';
import Details from './Details';

const router = (<Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/signup' component={ Signup }/>
            <Route path='/details' component={ Details }/>
        </Switch>)

export default router;