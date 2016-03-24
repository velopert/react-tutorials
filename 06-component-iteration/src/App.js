import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){

        return (
                <Contacts/>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('app'));
