import React from 'react';

class StateExample extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         header: "Header Initial state",
         content: "Content Initial State"
     };
   }

   _updateHeader(text){
       this.setState({
           header: "Header has changed"
       });
   }

   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
            <button onClick={_updateHeader.bind(this)}>Update</button>
         </div>
      );
   }
}

export default StateExample;
