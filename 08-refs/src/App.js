import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return  (
            <div>
                <input type="text"></input>
                <button>Clear n Reset </button>     
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
