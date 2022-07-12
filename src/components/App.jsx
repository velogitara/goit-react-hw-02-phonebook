import Form from './Form';
import Contacts from './Contacts';

import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  formSubmitHandler = data => {
    this.setState(prevState => {
      return { contacts: [data, ...prevState.contacts] };
    });
    console.log(data);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
        <Contacts state={this.state} />
      </div>
    );
  }
}

export default App;
