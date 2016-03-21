import React from 'react';
import ReactDOM from 'react-dom';

class Content extends React.Component {
    render(){
        return (
            <div>
                <h2>{ this.props.contentTitle }</h2>
                <p> { this.props.contentBody } </p>
            </div>
        );
    }
}

export default Content;
