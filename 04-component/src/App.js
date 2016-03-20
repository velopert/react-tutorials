import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'Header';

class App extends React.Component {
    render(){
        return  (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}

class Content extends React.Component {
    render(){
        return (
            <div>
                <h2>Content</h2>
                <p> Hey! </p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
