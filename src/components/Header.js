import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <div className="jumbotron">
      <h1>Protato Tap Room</h1>
      <NavLink to="/" activeClassName="is-active">Home</NavLink> | 
      <NavLink to="/keglist" activeClassName="is-active">What's On Tap?</NavLink> |
      <NavLink to="/admin" activeClassName="is-active">Admin</NavLink>
    </div>
  );
};

export default Header;