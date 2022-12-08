import React, { Component } from 'react';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList ';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name===name)) {
      return alert(`${name} is already in contacts!`);
    }

    const contact = { id: nanoid(), name, number };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = id => {
    console.log(id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterInput = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filterContact = () => {
    return this.state.contacts.filter(contact =>
      contact.name.includes(this.state.filter)
    );
  };

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm newContact={this.addNewContact} />

        <h2>Contacts</h2>
        <Filter filterInput={this.state.filter} onChange={this.filterInput} />
        <ContactList
          contacts={this.filterContact()}
          onClick={this.deleteContact}
        />
      </div>
    );
  }
}
