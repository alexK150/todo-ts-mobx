import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {TodoPage} from "./pages/todo.page";
import {Navbar} from "./components/navbar.component";
import {AboutPage} from "./pages/about.page";

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