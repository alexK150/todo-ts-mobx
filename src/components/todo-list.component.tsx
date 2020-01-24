import React from 'react';

import {Todo} from "./todo.component";
import {ITodo} from "../interfaces";

type TodoListProps = {
    todos: ITodo[],
    onToggle(id: number): void
    onRemove(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onRemove, onToggle}) => {
    if (todos.length === 0) {
        return <p className='center'>Todo List is Empty</p>
    }

    return (
        <ul>
            {todos.map((todo: ITodo) => {
                return <Todo
                    todo={todo}
                    key={todo.id}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            })}
        </ul>
    )
};