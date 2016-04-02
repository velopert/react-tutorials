import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


class App extends React.Component {
    render() {

        return (
                <div>
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Articles</Link></li>
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

export default Home;

class About extends React.Component {
    render() {
        return (
            <h2>Hey, I am ABOUT!</h2>
        );
    }
}

export default About;

class Articles extends React.Component {
    render() {
        return (
            <h2>Hey, I am ABOUT!</h2>
        );
    }
}

export default Articles;

ReactDOM.render(<Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "articles" component = {Articles} />
      </Route>
   </Router>, document.getElementById('app'));
