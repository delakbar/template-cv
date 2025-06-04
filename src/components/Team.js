import React from 'react';

const Team = () => {
  return (
    <section id="team" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Tim Kami</h2>
        <div className="row">
          <div className="col-md-3 text-center">
            <img src="https://via.placeholder.com/150"  className="rounded-circle mb-3" alt="John Doe" />
            <h5>John Doe</h5>
            <p>CEO</p>
          </div>
          <div className="col-md-3 text-center">
            <img src="https://via.placeholder.com/150"  className="rounded-circle mb-3" alt="Jane Smith" />
            <h5>Jane Smith</h5>
            <p>CTO</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team; // 🔥 Tambahkan ini