import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class HelloWorld extends Component {
    render() {
        return {
            <div>
                <h1>Hello world!</h1>
        }
    }
};

export default hot(module)(HelloWorld);