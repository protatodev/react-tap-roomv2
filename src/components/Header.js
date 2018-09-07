import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div className="jumbotron">
      <h1>Protato Tap Room</h1>
      <Link to="/">Home</Link> | 
      <Link to="/keglist">What's On Tap?</Link>
    </div>
  );
};

export default Header;