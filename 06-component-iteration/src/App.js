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
                <ContactCreator onUpdate={(a,b) => alert(a + "" + b)}/>
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
        this.props.onUpdate(this.state.name, this.state.phone);
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
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
