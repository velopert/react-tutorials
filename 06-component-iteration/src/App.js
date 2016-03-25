import React from 'react';
import ReactDOM from 'react-dom';
import ReactUpdate from 'react-addons';

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

    _insertContact(name, phone){
        let newState = React.addons.update(this.state, {
            contactData: {
                $push: [{"name": name, "phone": phone}]
            }
        });
        this.setState(newState);
    }


    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    {this.state.contactData.map((contact, i) => {
                        return (<ContactInfo name={contact.name}
                                            phone={contact.phone}
                                              key={i}/>);
                    })}
                </ul>
                <ContactCreator onInsert={this._insertContact.bind(this)}/>
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
}

class ContactCreator extends React.Component {
    constructor(props) {
        super(constructor);
        this.state = {
            name: "",
            phone: ""
        };
    }

    handleClick(){
        this.props.onInsert(this.state.name, this.state.phone);
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}/>

                    <input type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}>
                    Insert
                    </button>
                </p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
