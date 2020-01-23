import React from 'react';

import {ITodo} from "../interfaces";

type TodoProps = {
    todo: ITodo,
    onToggle(id: number): void
    onRemove(id: number): void
}

export const Todo: React.FC<TodoProps> = ({todo, onToggle, onRemove}) => {
    const dynamicClasses = ['todo'];
    if (todo.completed) {
        dynamicClasses.push('completed')
    }
    return <li className={dynamicClasses.join(' ')}>
        <label>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}/>
            <span>{todo.title}</span>
            <a className="waves-effect waves-light btn"
               onClick={() => onRemove(todo.id)}>delete</a>
        </label>
    </li>
};