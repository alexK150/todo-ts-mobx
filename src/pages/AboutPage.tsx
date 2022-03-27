import React from 'react';
import {Link} from "react-router-dom";

export const AboutPage: React.FC = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="about_container">
                <h5 className="lead">&#10004;React</h5>
                <h5 className="lead">&#10004;react-router-dom(BrowserRouter, Switch, NavLink, Link)</h5>
                <h5 className="lead">&#10004;hooks(useState, useEffect)</h5>
                <h5 className="lead">&#10004;TypeScript</h5>
                <h5 className="lead">&#10004;Materialize.css</h5>
            </div>
            <div className='back-btn'>
                <Link to='/' className='btn black left'>
                    &#10096;&nbsp;Back to the List
                </Link>
            </div>
        </div>
    )
};