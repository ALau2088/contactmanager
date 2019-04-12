import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*
 function Header() {
  return (
    <div>
      <h1>Contact Manager</h1>
    </div>
  )
}
*/

// Arrow function format
const Header = props => {
  const { branding } = props;
  return (
    <div>
      {/*<h1>Contact Manager</h1>*/}
      {/*<h1 style={{color: 'red', fontSize: '50px'}}>{branding}</h1>*/}
      {/*<h1 style={headingStyle}>{branding}</h1>*/}
      {/*<h1>{branding}</h1>*/}
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">{branding}</a>
        <div>
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
          {/* Use Link instead of a tag
          <a href="/" className="nav-link">Home</a>
          */}
          <Link to="/" className="nav-link"><i className="fas fa-home"></i>Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/contact/add" className="nav-link"><i className="fas fa-plus"></i>Add</Link>
          </li>
          <li className="nav-item">
          <Link to="/about" className="nav-link"><i className="fas fa-question"></i>About</Link>
          </li>
          </ul>
        </div>
      </div>
      </nav>
    </div>
  );
};

// Default props
Header.defaultProps = {
  // If no props is passed in when component is used
  branding: 'My App'
};

// Typechecking with PropTypes
Header.propTypes = {
  branding: PropTypes.string.isRequired
}

/*
const headingStyle = {
  color: 'green',
  fontSize: '50px'
}
*/

export default Header;
