import React from 'react';
import {Switch,Route} from "react-router-dom";

import Home from "../views/home";
import AllMentors from "../views/AllMentors";


const Index=()=>{
    return(
        <Switch>
        <Route component={AllMentors} path="/allmentors"/>

        
        <Route component={Home} path={["/home","/"]} />
        </Switch>
    )
}

export default Index;