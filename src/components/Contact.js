import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Kontak Kami</h2>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Nama" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="3" placeholder="Pesan" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Kirim</button>
            </form>
          </div>
          <div className="col-md-6">
            <iframe 
            title="Lokasi Kantor" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.216887537777!2d106.8214523147688!3d-6.238326095469937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e8df5945e7%3A0x5c8f9f56e8f1c7e6!2sMonas%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
              width="100%" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact; // 🔥 Tambahkan ini