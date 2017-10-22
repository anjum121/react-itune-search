import React, {Component} from 'react';
import './No-results.css'

class NoResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    render() {
        let nothingToShowText = 'I don\'t have to show anything to anyone, There is nothing to prove.'
        return (
            <div className="no-results">
                <h1>{nothingToShowText}</h1>
            </div>
        );
    }
}


export  default NoResults;