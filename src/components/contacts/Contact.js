import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//import './contact.css';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
  static propTypes = {
    /*
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    */
    contact: PropTypes.object.isRequired
    /* No longer need after Context Implementation
    deleteClickHandler: PropTypes.func.isRequired
    */
  };

  state = {
    showContactInfo: false
  };
  // constructor() {
  //   super();
  //   this.state = {};

  //   this.onShowClick = this.onShowClick.bind(this);
  // }

  // Custom method requires either bind this. This can be done by onClick = {this.onShowClick.bind(this)} or constructor or arrow function
  // onShowClick(){
  //   //console.log('Hello World');
  //   console.log(this.state);
  // }

  // onShowClick = () => {
  //   console.log(this.state);
  // }

  // Event object
  // onShowClick = e => {
  //   //console.log(e.target);
  //   this.setState({showContactInfo: !this.state.showContactInfo});
  // };

  // onShowClick = (id, e) => {
  //   console.log(id);
  // } // Output: 1

  // onShowClick = (name, e) => {
  //   console.log(name);
  // } // Output: {name}

  onDeleteClick = async (id, dispatch) => {
    //console.log('clicked');
    /* No Longer needed after Context Implementation
    this.props.deleteClickHandler()
    */
    /*
    axios
      // Delete from back end
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      // Delete from DOM
      .then(res => dispatch({type: 'DELETE_CONTACT', payload: id}));
    */

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  render() {
    // Destructuring
    //const { name, email, phone } = this.props;
    //const { contact } = this.props;
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='card card-body mb-3'>
              {/*<h4>John Doe</h4>*/}
              {/*<h4>{this.props.name}</h4>*/}
              <h4>
                {name}{' '}
                {/*
          <i 
            onClick={() => console.log('Hello')}className="fas fa-sort-down" 
          />
          */}
                {/*
          <i 
            onClick={this.onShowClick.bind(this, 1)}className="fas fa-sort-down" 
          />
          */}
                <i
                  onClick={() => {
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    });
                  }}
                  className='fas fa-sort-down'
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className='fas fa-times'
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  /*onClick={this.onDeleteClick}*/
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i 
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}></i>
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className='list-group'>
                  {/*
          <li>Email: jdoe@gmail.com</li>
          <li>Phone: 555-555-5555</li>
          */}
                  {/*
          <li>Email: {this.props.email}</li>
          <li>Phone: {this.props.phone}</li>
          */}

                  <li className='list-group-item'>Email: {email}</li>
                  <li className='list-group-item'>Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

/*
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
*/

export default Contact;
