import React, {Component} from 'react';
import './App.css';

export const label = (name: string) => {
    return `Hello ${name.toUpperCase()}`;
};

export class App extends Component {
    render() {
        const name = 'World';
        return (
            <div>
                <h1>{label(name)}</h1>
            </div>
        );
    }
}
