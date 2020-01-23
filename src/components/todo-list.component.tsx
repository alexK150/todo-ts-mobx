import React from 'react';

import {Todo} from "./todo.component";
import {ITodo} from "../interfaces";

type TodoListProps = {
    todos: ITodo[]
}

export const TodoList: React.FC<TodoListProps> = ({todos}) => {
    return (
        <ul>
            {todos.map(todo =>{
                return <Todo
                    key={todo.id}
                    id={todo.id}
                    completed={todo.completed}
                    title={todo.title}
                />
            })}
        </ul>
    )
};