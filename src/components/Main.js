import React, { Component } from 'react'

import Meme from './Meme';
import Header from './Header';

export default class Main extends Component {
    render() {
        return (
            <div className="container main-content">
                <div className="grid">
                    <React.Fragment>
                        <Header />
                        <Meme />
                        <Meme />
                        <Meme />
                        <Meme />
                    </React.Fragment>
                </div>
            </div>
        )
    }
}
