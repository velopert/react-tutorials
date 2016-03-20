import React from 'react';
import ReactDOM from 'react-dom';

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

class Header extends React.Component{
    render(){
        return (
            <h1>Header</h1>
        );
    }
}

class Content extends React.Component{
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
