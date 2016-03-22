import React from 'react';
import ReactDOM from 'react-dom';



class RandomNumber extends React.Component {


    _update(){
            console.log(this.props.number);
    }

    constructor(props){
        super(props);
    }


    render(){
        return (
            <div>
                <h1>RANDOM NUMBER: { this.props.number }</h1>
                <button onClick={this._update.bind(this)}>Randomize</button>
            </div>
        );
    }
}

export default RandomNumber;