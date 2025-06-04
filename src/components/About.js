import React from 'react';
import teamImage from '../assets/images/team-working.jpg'; // Gambar tim
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
     <section id="about" className="py-5" data-aos="fade-up">
      <div className="container bg-white bg-opacity-90 p-5 rounded">
        <div className="container">
            <h2 className="text-center mb-4">Tentang Kami</h2>
            <div className="row">
            <div className="col-md-6">
                <p>CV Maju Bersama berdiri sejak 2015, berfokus pada layanan konstruksi dan pengadaan.</p>
            </div>
            <div className="col-md-6">
                <ul className="list-group">
                <li className="list-group-item"><i className="fas fa-check text-success me-2"></i> 8+ Tahun Pengalaman</li>
                <li className="list-group-item"><i className="fas fa-check text-success me-2"></i> Tim Profesional</li>
                <li className="list-group-item">
                <i className="fas fa-hard-hat fa-spin text-primary me-2"></i> 
                Konstruksi Berkualitas
                </li>
                </ul>
            </div>
            </div>
        </div>
       </div>
    </section>
  );
};
export default About; // 🔥 Tambahkan ini