import React from 'react';
import ReactDOM from 'react-dom';

class RandomNumber extends React.Component {
    _randomize(){
        let value = Math.round(Math.random() * 100);
        console.log(this.props.number);
        this.props.onUpdate(value);
    }

    render(){
        return (
            <div>
                <h1>RANDOM NUMBER: { this.props.number }</h1>
                <button onClick={this._randomize}>Randomize</button>
            </div>
        );
    }
}

export default RandomNumber;
