import React from 'react';
import resume from "../assets/resume.jpg";

const Resume = () => {
  return (
    <section id="Resume" className="container-fluid px-5 py-5 background">
      <div className="row align-items-center">
        
        {/* Image Section */}
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
          <img src={resume} alt="Resume" className="img-fluid rounded w-50" />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6 mt-4 mt-md-0 text-center">
          <h1 className="text-decoration-underline mb-4">Resume</h1>
          <p>
            You can view my resume  
            <a href="https://elanthiranresume.netlify.app/My_Resume.pdf" download className="btn btn-success ms-2">
              View
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Resume;
