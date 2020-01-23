import React from 'react';

import {Todo} from "./todo.component";
import {ITodo} from "../interfaces";

type TodoListProps = {
    todos: ITodo[],
    onToggle(id: number): void
    onRemove(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onRemove, onToggle}) => {
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