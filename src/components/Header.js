import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div>
      <h1>Protato Tap Room</h1>
      <Link to="/">Home</Link> | 
      <Link to="/keglist">What's On Tap?</Link> |
      <Link to="/newkeg">Create New Keg</Link>
    </div>
  );
};

export default Header;