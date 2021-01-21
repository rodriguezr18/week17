// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import BasicInfo from "./BasicInfo/person.js";

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      persons: [
        {
          name: 'Rudy',
          number: '00000000',
          DOB: '02/19/00'
        },
        {
          name: 'Rudy',
          number: '00000000',
          DOB: '02/19/00'
        },
        {
          name: 'Rudy',
          number: '00000000',
          DOB: '02/19/00'
        },
        {
          name: 'Rudy',
          number: '00000000',
          DOB: '02/19/00'
        }
      ]
    }
  }

  render(){
    return <BasicInfo persons={this.state.persons}/>;
  }
 }



export default App;

