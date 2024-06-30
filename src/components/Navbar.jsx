import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/inventory" className="mr-4">Inventory</Link>
          <Link to="/prescription" className="mr-4">Prescription</Link>
          <Link to="/patients" className="mr-4">Patients</Link>
          <Link to="/sales" className="mr-4">Sales</Link>
          <Link to="/reports" className="mr-4">Reports</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;