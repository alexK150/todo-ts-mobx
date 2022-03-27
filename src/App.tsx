import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {TodoPage} from "./pages/TodoPage";
import {Navbar} from "./components/Navbar";
import {AboutPage} from "./pages/AboutPage";

export const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <div className='container'>
                <Switch>
                    <Route component={TodoPage} path='/' exact/>
                    <Route component={AboutPage} path='/about'/>
                </Switch>
            </div>
        </BrowserRouter>
    )
};