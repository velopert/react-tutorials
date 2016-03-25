import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){

        return (
                <Contacts/>
        );
    }
}

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactData: [
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"}
            ]
        };
    }

    _insertDummy(){
        this.state.contactData.push({name: "Dummy", phone: "010-0000-0000"});
    }

    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    {this.state.contactData.map((contact, i) => {
                        return (<ContactInfo name={contact.name}
                                            phone={contact.phone}
                                              />);
                    })}
                </ul>
                <button onClick={this._insertDummy.bind(this)}>
                    Insert Dummy
                </button>
            </div>
        );
    }
}

class ContactInfo extends React.Component {
    render() {
        return(
            <li>{this.props.name} {this.props.phone}</li>
            );
    }

    componentDidMount() {
        console.log('I AM MOUNTED! ' + this.props.name);
    }


}

ReactDOM.render(<App />, document.getElementById('app'));
