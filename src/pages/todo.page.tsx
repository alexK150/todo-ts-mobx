import React, {useState, useEffect} from 'react';

import {InputForm} from "../components/input-form.component";
import {TodoList} from "../components/todo-list.component";
import {ITodo} from "../interfaces";

declare var confirm: (question: string) => boolean;

export const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(savedItems)
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const addTodo = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        };

        setTodos(prevState => [newTodo, ...prevState]);
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
        const shouldRemove = window.confirm('Are you sure you wat to delete this item?');
        if (shouldRemove) {
            setTodos(prevState => prevState.filter(todo =>
                todo.id !== id
                )
            )
        }
    };

    return (
        <>
            <div className='container'>
                <InputForm onAdd={addTodo}/>
                <TodoList
                    onRemove={removeHandler}
                    onToggle={toggleHandler}
                    todos={todos}/>
            </div>
        </>
    )
};