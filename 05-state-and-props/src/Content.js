import React from 'react';
import ReactDOM from 'react-dom';

class Content extends React.Component {
    render(){
        return (
            <div>
                <h2>{ this.props.title }</h2>
                <p> { this.props.body } </p>
            </div>
        );
    }
}

Content.propTypes = {
    title: React.PropTypes.number.isRequired,
    body: React.PropTypes.number
};

export default Content;
