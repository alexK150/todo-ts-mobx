import React, {useState} from 'react';

import {Navbar} from "./components/navbar.component";
import {InputForm} from "./components/input-form.component";
import {TodoList} from "./components/todo-list.component";
import {ITodo} from "./interfaces";

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        };

        setTodos(prevState => [newTodo, ...prevState])
    };

    return <>
        <Navbar/>
        <div className='container'>
            <InputForm onAdd={addTodo}/>
            <TodoList todos={todos}/>
        </div>
    </>
};

export default App;
