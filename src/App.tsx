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

    const toggleHandler = (id: number) => {
        setTodos(prevState => prevState.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    };

    const removeHandler = (id: number) => {
        setTodos(prevState => prevState.filter(todo =>
            todo.id !== id
            )
        )
    };

    return <>
        <Navbar/>
        <div className='container'>
            <InputForm onAdd={addTodo}/>
            <TodoList
                onRemove={removeHandler}
                onToggle={toggleHandler}
                todos={todos}/>
        </div>
    </>
};

export default App;
