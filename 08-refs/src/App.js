import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return  (
            <div>
                <input></input>
                <button></button>
                Single Letter
                FUCK YOU IT DOES NOT WORK
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
