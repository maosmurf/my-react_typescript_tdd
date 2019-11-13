import React from 'react';
import './App.css';

export const label = (name: string) => {
    return `Hello ${name.toUpperCase()}`;
};

const App: React.FC = () => {
    const name = 'World';
    return (
        <div>
            <h1>{label(name)}</h1>
        </div>
    );
};

export default App;
