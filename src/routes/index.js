import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from "../views/home";
import AllMentors from "../views/AllMentors";
import Dashboard from "../views/Dashboard";
import DashMentors from "../views/dashboard/Mentors";
import Header from "../components/Header";
import Signup from "../views/Signup";

const Index = () => {
    return (
        <>
            
            <Header />
            <Switch>

                <Route component={AllMentors} path="/allmentors" />
                <Route component={Dashboard} path="/dashboard" />
                <Route component={DashMentors} path="/dashmentors" />
                <Route component={Signup} path="/signup" />
                <Route component={Home} path={["/home", "/"]} />

            </Switch>

        </>
    )
}

export default Index;