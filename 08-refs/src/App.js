import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return  (
            <div>
                <input></input>
                <button>plz just save me</button>
                Its alot to know 
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
