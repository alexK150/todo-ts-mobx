import React from 'react';

export const Navbar: React.FC = () => {
    return <nav>
        <div className="nav-wrapper #1976d2 blue darken-2 px1">
            <a href="/" className="brand-logo">TODO-TypeScript</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/">Todo List</a></li>
                <li><a href="/">About</a></li>
            </ul>
        </div>
    </nav>
};