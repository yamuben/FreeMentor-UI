import React from 'react';
import {Switch,Route} from "react-router-dom";

import Home from "../views/home";


const Index=()=>{
    return(
        <Switch>
            <Route component={Home} path={["/home","/"]} />
        </Switch>
    )
}

export default Index;