import React from 'react';

import {Navbar} from "./components/navbar.component";
import {InputForm} from "./components/input-form.component";

const App: React.FC = () => {
    return <>
        <Navbar/>
        <div className='container'>
            <InputForm/>
        </div>
    </>
};

export default App;
