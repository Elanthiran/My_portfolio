import React from 'react';
import image from "../assets/image.jpg";

const About = () => {
  return (
    <section id="About" className="container-fluid px-5 py-5 background">
      <div className="row align-items-center ">
        {/* Image Section */}
        <div className="col-12 col-md-6  d-flex justify-content-center">
          <img src={image} alt="K Elanthiran" className="img-fluid rounded" />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6 mt-4 mt-md-0">
          <h1 className="text-decoration-underline mb-4">About Me</h1>
          <p>
            Hi, I’m K Elanthiran, a Full-Stack Developer with a degree in Mechanical Engineering from
            Government College of Engineering, Salem.
          </p>
          <p>
            Though my academic background is in Mechanical Engineering, my passion for technology led me to pursue
            a Full-Stack Developer course at GUVI, where I gained hands-on experience with both front-end and back-end
            development.
          </p>
          <p>
            I specialize in creating user-friendly, responsive web applications and building scalable back-end systems. I’m always eager to tackle new challenges and expand my skills to deliver innovative solutions.
          </p>
          <p>
            Feel free to explore my portfolio to learn more about my projects. Let’s connect if you’re looking for a
            collaborator or new opportunities!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
