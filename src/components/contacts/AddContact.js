import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";

// No longer need uuid because https://jsonplaceholder.typicode.com api auto creates id usually the case for apis  
//import uuid from "uuid";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  /* 
  componentDidMount = () => console.log(this.props);
  */

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    //console.log(this.state);
    const { name, email, phone } = this.state;

    // Validation/Check for Errors
    if (name === "") {
      this.setState({
        errors: {
          name: "Name is required"
        }
      });
      return;
    }

    if (email === "") {
      this.setState({
        errors: {
          email: "Email is required"
        }
      });
      return;
    }

    if (phone === "") {
      this.setState({
        errors: {
          phone: "Phone is required"
        }
      });
      return;
    }

    const newContact = {
      //id: uuid(), // no longer need uuid() because the api auto creates it when a new contact is created
      name,
      email,
      phone
    };

    // Post request using promise
    // axios
    //   .post('https://jsonplaceholder.typicode.com/users', newContact).then(res => dispatch({ type: "ADD_CONTACT", payload: res.data }));

    // Post request using async await
    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users', newContact
    );

    dispatch({ type: 'ADD_CONTACT', payload: res.data});

    // Clear State
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    // redirects back to '/' after contact has been submitted
    this.props.history.push("/");
  };

  //onNameChange = e => this.setState({ name: e.target.value });
  //onEmailChange = e => this.setState({ email: e.target.value });
  //onPhoneChange = e => this.setState({ phone: e.target.value });
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  {/* Replaced by TextInputGroup
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name..."
                      value={name}
                      onChange={this.onChange}
                    />
                  </div> 
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email"
                      name="email" 
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      value={email}
                      onChange={this.onChange}
                    />
                  </div> 
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                      type="text"
                      name="phone" 
                      className="form-control form-control-lg"
                      placeholder="Enter Phone..."
                      value={phone}
                      onChange={this.onChange}
                    />
                
                  </div>
                  */}
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
