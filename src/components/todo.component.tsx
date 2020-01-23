import React from 'react';

export const Todo: React.FC = () => {
    return <li className='todo'>
        <label htmlFor="">
            <input type="checkbox"/>
            <span></span>
            <a className="waves-effect waves-light btn">delete</a>
        </label>
    </li>
};