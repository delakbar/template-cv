import React from 'react';

const Services = () => {
  return (
    <section id="services" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Layanan Kami</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <i className="fas fa-hard-hat fa-3x text-primary mb-3"></i>
                <h5>Konstruksi</h5>
                <p>Pembangunan infrastruktur berkualitas tinggi</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <i className="fas fa-truck fa-3x text-primary mb-3"></i>
                <h5>Pengadaan</h5>
                <p>Suplai material terpercaya dan tepat waktu</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <i className="fas fa-tools fa-3x text-primary mb-3"></i>
                <h5>Maintenance</h5>
                <p>Pemeliharaan aset dan infrastruktur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services; // 🔥 Tambahkan ini