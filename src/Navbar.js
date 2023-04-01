import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="contanier">
      <h1 className="h1">Minameno Blog</h1>
      <div className="btns">
        <Link to="/" className='Home'> Home </Link>
        <Link to="/create" className='Newblog'> New Blog </Link>
      </div>
      </div>
    </div>
  );
}

export default Navbar;