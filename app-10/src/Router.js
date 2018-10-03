import React from "react"
import {Route, Switch} from "react-router-dom";

import Products from "./Products";
import Details from "./Details";

export default (
    <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/details/:id" component={Details} />
    </Switch>
);