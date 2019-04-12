import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Contact from './components/Contact';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        {/* Need to add basename={process.env} for BrowserRouter to work */}
        <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header branding="Contact Manager"/>
        <div className="container">
          {/*
          <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555"/>
          <Contact name="Karen Smith" email="karen@gmail.com" phone="333-333-3333"/>
          */}
          {/*
          <AddContact />
          <Contacts/>
          */}
          <Switch>
            <Route exact path="/" component={Contacts}/>
            <Route exact path="/contact/add" component={AddContact}/>
            <Route exact path="/contact/edit/:id" component={EditContact}/>
            {/* react router allows to use dynamic paths eg :id
            <Route exact path="/about/:id" component={About}/>
            */}
            <Route exact path="/about" component={About}/>
            <Route exact path="/test" component={Test}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
