import React from 'react';

import {Todo} from "./todo.component";

type TodoListProps = {
    todos: any[]
}

export const TodoList: React.FC<TodoListProps> = ({todos}) => {
    return (
        <ul>
            {todos.map(todo =>{
                return <Todo key={todo.id}/>
            })}
        </ul>
    )
};