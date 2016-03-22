import React from 'react';
import ReactDOM from 'react-dom';

function _update(){
    console.log("FUCK THAT");
    console.log(this.props.number);
}
class RandomNumber extends React.Component {

    constructor(props){
        super(props);
        _update.bind(this);
    }


    render(){
        return (
            <div>
                <h1>RANDOM NUMBER: { this.props.number }</h1>
                <button onClick={this._update}>Randomize</button>
            </div>
        );
    }
}

export default RandomNumber;
