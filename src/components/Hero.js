import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="hero bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">CV Maju Bersama</h1>
        <p className="lead">Solusi Terpercaya untuk Bisnis Anda</p>
        <Link to="services" smooth={true} duration={500} className="btn btn-light btn-lg mt-3">
          Lihat Layanan
        </Link>
      </div>
    </section>
  );
};
export default Hero; // 🔥 Tambahkan ini