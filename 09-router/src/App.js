import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


class App extends React.Component {
    render() {

        return (
                <div>
                    <ul>
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="articles">Articles</Link></li>
                    </ul>
                    {this.props.children}
                </div>
        );
    }
}

export default App;

class Home extends React.Component {
    render() {
        return (
            <h2>Hey, I am HOME!</h2>
        );
    }
}

class About extends React.Component {
    render() {
        return (
            <h2>Hey, I am ABOUT!</h2>
        );
    }
}

class Articles extends React.Component {
    render() {
        return (
            <h2>Hey, I am ARTCILES!</h2>
        );
    }
}


ReactDOM.render(<Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "articles" component = {Articles} />
      </Route>
   </Router>, document.getElementById('app'));
