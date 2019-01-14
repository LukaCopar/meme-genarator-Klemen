import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'


import SideBar from './SideBar';

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <SideBar />
                <div className="header container">
                    <Link to="/">
                        <img src="img/memegenerator-purple.svg" alt="slika" />
                    </Link>
                    <div className="headerButtons">
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}
