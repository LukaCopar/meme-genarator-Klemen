import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Meme from './Meme';

class Details extends Component {
    constructor(props) {
        super(props);
        const { memes } = this.props;
        const [meme] = memes.filter(meme => meme.id === parseInt(this.props.match.params.id, 10));



        console.log(meme);
    }
    render() {
        return (
            <div>

                <Meme key={meme.id} meme={meme} />
            </div>
        )
    }
}

export default withRouter(Details);
