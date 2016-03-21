import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
    render(){
        return  (
            <div>
                <Header title={ this.props.headerTitle }/>
                <Content title={ this.props.contentTitle }
                          body={ this.props.contentBody }/>
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle: 'Default header',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
};

ReactDOM.render(<App contentTitle={5} contentBody={undefined} />, document.getElementById('app'));
