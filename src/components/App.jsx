import Form from './Form';
import Contacts from './Contacts';

import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  formSubmitHandler = data => {
    this.state.contacts.find(i => i.name === data.name)
      ? alert('Fuck off with your same name')
      : this.setState(prevState => {
          return { contacts: [data, ...prevState.contacts] };
        });
    console.log(data);
  };
  filterHandler = e => {
    this.setState({
      filter: e.currentTarget.value.toLowerCase(),
    });
  };

  onDeleteContactHandler = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(i => i.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
        <Contacts
          state={this.state}
          filter={this.filterHandler}
          onDelete={this.onDeleteContactHandler}
        />
      </div>
    );
  }
}

export default App;
