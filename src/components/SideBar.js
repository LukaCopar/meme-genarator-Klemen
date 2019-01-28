import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default class SideBar extends Component {
    render() {
        return (
            <div className="leftSidebar">
                <div className="leftSidebar-item-wrapper">
                    <span>
                        <Link to="/">
                            <img src="img/mm-home-on.svg" alt="Home" />
                        </Link>
                    </span>
                    <span>
                        <Link to="/login">
                            <img src="img/mm-section-off.svg" alt="Section" />
                        </Link>
                    </span>
                    <span>
                        <Link to="/edit">
                            <img src="img/mm-create-off.svg" alt="Create" />
                        </Link>
                    </span>
                </div>
            </div>
        );
    }
}