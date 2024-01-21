import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-light d-flex justify-content-end lg-justify-content-center" style={{ height: '10vh' }}>
      <ul className="list-unstyled">
        <li className="text-dark mt-2">
          <a className="text-dark text-decoration-none h4" style={{ marginRight: '30px' }} href="/">Courses</a>
        </li>
      </ul>
      <ul className="list-unstyled">
        <li className="text-dark  mt-2">
          <a className="text-dark text-decoration-none h4" style={{ marginRight: '30px' }} href="/home">Home</a>
        </li>
      </ul>
      <ul className="list-unstyled">
        <li className="text-dark  mt-2">
          <a className="text-dark text-decoration-none h4" style={{ marginRight: '30px' }} href="/aboutus">About Us</a>
        </li>
      </ul>
      <ul className="list-unstyled">
        <li className="text-dark  mt-2">
          <a className="text-dark text-decoration-none h4" style={{ marginRight: '30px' }} href="/dashboard">Dashboard</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;