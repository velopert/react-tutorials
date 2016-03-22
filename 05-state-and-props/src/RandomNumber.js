import React from 'react';
import ReactDOM from 'react-dom';

class RandomNumber extends React.Component {


    constructor(props){
        super(props);
    }


    render(){
        return (
            <div>
                <h1>RANDOM NUMBER: { this.props.number }</h1>
                <button>Randomize</button>
            </div>
        );
    }
}

export default RandomNumber;
