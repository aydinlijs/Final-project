import React from 'react';
import Todos from './Todos';
import Posts from './Posts';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './global.css';

class App extends React.Component {
    render() {
        return (
            <div className="b-container">
                <BrowserRouter>
                    <Link to='/posts'><button className="navButton">Posts</button></Link>
                    <Link to='/todos'><button className="navButton">Todos</button></Link>
                    <Route exact path="/todos">
                        <Todos />
                    </Route>
                    <Route exact path="/posts">
                        <Posts />
                    </Route>
                </BrowserRouter>

            </div>
        )
    }
}

export default App;