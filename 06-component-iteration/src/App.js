import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';

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
            ],
            selectedKey: -1
        };
    }

    _insertContact(name, phone){
        let newState = update(this.state, {
            contactData: {
                $push: [{"name": name, "phone": phone}]
            }
        });
        this.setState(newState);
    }

    _itemClicked(key){
        this.setState({
            selectedKey: key
        });
    }

    _isSelected(key){
        if(this.state.selectedKey == key){
            return true;
        }else{
            return false;
        }
    }


    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    {this.state.contactData.map((contact, i) => {
                        return (<ContactInfo name={contact.name}
                                            phone={contact.phone}
                                              key={i}
                                       isSelected={_isSelected(i)}/>);
                    })}
                </ul>
                <ContactCreator onInsert={this._insertContact.bind(this)}/>
            </div>
        );
    }
}


class ContactInfo extends React.Component {

    handleClick(){
        this.props.itemSelected(this.props.key);
    }

    render() {
        return(
            <li onClick={handleClick.bind(this)}>{this.props.name} {this.props.phone} {this.props.isSelected}</li>
            );
    }
}

class ContactCreator extends React.Component {
    constructor(props) {
        super(constructor);
        // Configure default state
        this.state = {
            name: "",
            phone: ""
        };
    }

    handleClick(){
        this.props.onInsert(this.state.name, this.state.phone);
        this.setState({
            name: "",
            phone: ""
        });
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
