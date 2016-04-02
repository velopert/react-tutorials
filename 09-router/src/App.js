import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

class App extends React.Component {
    render(){

        return (
                <div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Articles</li>
                    </ul>
                </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
