import React from 'react';

import {ITodo} from "../interfaces";

export const Todo: React.FC<ITodo> = ({id, completed, title}) => {
    const dynamicClasses = ['todo'];
    if (completed){
        dynamicClasses.push('completed')
    }
    return <li className={dynamicClasses.join(' ')} key={id}>
        <label htmlFor="">
            <input type="checkbox" checked={completed}/>
            <span>{title}</span>
            <a className="waves-effect waves-light btn">delete</a>
        </label>
    </li>
};