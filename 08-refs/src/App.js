import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return  (
            <div>
                <input></input>
                <button></button>
                <button></button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
