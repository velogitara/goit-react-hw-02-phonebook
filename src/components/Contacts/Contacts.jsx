import React, { Component } from 'react';
import Filter from '../Filter';
class Contacts extends Component {
  render() {
    const { contacts } = this.props.state;

    return (
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ul>
          {contacts.map(item => {
            return (
              <li key={item.id}>
                <span>{item.name}</span> <span>{item.number}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Contacts;
