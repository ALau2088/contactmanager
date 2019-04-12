import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  // constructor is not needed if just processing state.
  /*constructor() {
    super();
    this.state = {
  */
 /* Moved to context.js
  state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "555-555-5555"
        },
        {
          id: 2,
          name: "Karen Williams",
          email: "jode@gmail.com",
          phone: "222-222-2222"
        },
        {
          id: 3,
          name: "Henry Johnson",
          email: "jode@gmail.com",
          phone: "111-111-1111"
        }
      ]
    };
  */
    /* Moved as an action to reducer in context.js after Context implementation
    deleteContact = (id) => {
      //console.log(id);
      const { contacts } = this.state

      const newContacts = contacts.filter(contact => contact.id !== id);

      this.setState({
        contacts: newContacts
      });
    };
    */

  render() {
    
    //const { contacts } = this.state;
    return (
      <Consumer>
        {value => {
          const {contacts} = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact </span>List
              </h1>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  /*
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                  */
                  contact={contact}
                  /* Moved to Contact after Context implementation
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                  */
                />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    );
  }
}

export default Contacts;
