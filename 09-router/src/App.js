import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

class App extends React.Component {
    render(){

        return (
                <h1>Hello React Skeleton!!</h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
