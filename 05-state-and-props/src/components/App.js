import React from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';

class App extends React.Component {
     
    constructor(props){
        super(props);

        this.state = {
            value: Math.round(Math.random()*100)
        };

        this._updateValue = this._updateValue.bind(this);
    }

    render(){
        return  (
            <div>
                <Header title={this.props.header}/>
                <Content title={this.props.contentTitle}
                    body={this.props.contentBody}/>
                <RandomNumber number={this.state.value}
                              onUpdate={this._updateValue} />
            </div>
        );
    }

    _updateValue(randomValue){
        this.setState({
            value: randomValue
        });
    }
}

App.defaultProps = {
    header: 'Default header',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
}

export default App;
