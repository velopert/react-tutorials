import React from 'react';
import ReactDOM from 'react-dom';

function myFunction(){
    console.log(this.props.number);
}
class RandomNumber extends React.Component {
    _update(){
        let value = Math.round(Math.random()*100);
        this.props.onUpdate(value);
    }

    constructor(props){
        super(props);
        this.myFunction = myFunction.bind(this);
    }

    render(){
        return (
            <div>
                <h1>RANDOM NUMBER: { this.props.number }</h1>
                <button onClick={this.myFunction}>Randomize</button>
            </div>
        );
    }
}

export default RandomNumber;
