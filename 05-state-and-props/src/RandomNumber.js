import React from 'react';
import ReactDOM from 'react-dom';

class RandomNumber extends React.Component {
    update(){
        let value = Math.round(Math.random() * 100);
        this.props.number = 5;
        console.log(this.props.number);
        //this.props.onUpdate(value);
    }

    render(){
        return (
            <div>
                <h1>RANDOM NUMBER: { this.props.number }</h1>
                <button onClick={this.update}>Randomize</button>
            </div>
        );
    }
}

export default RandomNumber;
