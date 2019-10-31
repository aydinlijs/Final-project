import React from 'react';
import Todos from './Todos';
import './global.css';

class App extends React.Component {
    render() {
        return (
            <div className="b-container"><Todos /></div>
        )
    }
}

export default App;