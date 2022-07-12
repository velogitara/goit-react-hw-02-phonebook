import React, { Component } from 'react';
import Filter from '../Filter';
class Contacts extends Component {
  render() {
    const { contacts, filter } = this.props.state;
    const { onDelete } = this.props;
    const filteredContacts = contacts.filter(i =>
      i.name.toLowerCase().includes(filter)
    );
    return (
      <div>
        <h2>Contacts</h2>
        {contacts.length ? (
          <Filter title={'Find contacts by name'} filter={this.props.filter} />
        ) : (
          <span> </span>
        )}

        <ul>
          {filteredContacts.length ? (
            filteredContacts.map(item => {
              return (
                <li key={item.id}>
                  <span>{item.name}</span> <span>{item.number}</span>
                  <button
                    type="button"
                    onClick={() => {
                      onDelete(item.id);
                    }}
                  >
                    delete
                  </button>
                </li>
              );
            })
          ) : (
            <div>
              {filter ? (
                <span>
                  No contacts <span>found</span>
                </span>
              ) : (
                <span>
                  No contacts <span>yet</span>
                </span>
              )}
            </div>
          )}
        </ul>
      </div>
    );
  }
}

export default Contacts;
