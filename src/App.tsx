import React, {useState} from 'react';

import {Navbar} from "./components/navbar.component";
import {InputForm} from "./components/input-form.component";

const App: React.FC = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (title: string) => {
        console.log('Add New Todo', title)
    };

    return <>
        <Navbar/>
        <div className='container'>
            <InputForm onAdd={addTodo}/>
        </div>
    </>
};

export default App;
