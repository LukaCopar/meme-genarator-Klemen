import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Details extends Component {
    constructor(props) {
        super(props);
        console.log("lmao");

        const { memes } = this.props;
        const [meme] = memes.filter(meme => meme.id === parseInt(this.props.match.params.id, 10));

    }
    render() {
        console.log(this.state);
        return (
            <div>
                ayyy lmao xD!
            </div>
        )
    }
}

export default withRouter(Details);
