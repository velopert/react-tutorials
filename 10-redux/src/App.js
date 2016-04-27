import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { addCounter, minusCounter } from './actions/actions';

class App extends React.Component {
    render(){
        const { onIncrement, counter } = this.props;
        return (
            <h1 onClick = { onIncrement }>Hello React Skeleton {counter}</h1>
        );
    }

}

export default App;




