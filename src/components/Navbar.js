import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">CV Maju Bersama</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li type="button" className="nav-item"><Link to="about" smooth={true} duration={500} className="nav-link">Tentang</Link></li>
            <li type="button" className="nav-item"><Link to="services" smooth={true} duration={500} className="nav-link">Layanan</Link></li>
            <li type="button" className="nav-item"><Link to="team" smooth={true} duration={500} className="nav-link">Tim</Link></li>
            <li type="button" className="nav-item"><Link to="contact" smooth={true} duration={500} className="nav-link">Kontak</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar; // 🔥 Tambahkan ini