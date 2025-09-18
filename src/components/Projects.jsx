import React from 'react';
import movieBooking from  "../assets/movieBooking.jpg"
import food from "../assets/food.jpeg"
import todo from "../assets/todo.png"

const Projects = () => {
  return (
    <section id="Projects" className='container-fluid px-5 py-5 background'>
      <div className='row align-items-center'>
        <div className='w-100 text-center'>
          <h1 className="text-decoration-underline mb-4">Projects</h1>
          <p>These are some of my best projects. I have built them with React, MERN, and Bootstrap. Check them out!</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className='row justify-content-center g-4'> 
        {/* Project 1 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 position-relative ">
          <img
            src="https://m.media-amazon.com/images/I/81rLXsDU0cL.jpg"
            className="img-fluid rounded frame"
            alt="Schedule of Indian cricket team 2025"
          />
          {/* Overlay on Hover */}
          <div className="position-absolute start-0 end-0 bottom-0 top-0 bg-dark rounded bg-opacity-75 opacity-0 hover-opacity-100 text-white p-2 text-center d-flex flex-column justify-content-center">
            <p className="mb-2">Schedule of Indian cricket team 2025. Built with HTML & CSS.</p>
            <a href="https://htmlcssp1.netlify.app/" className='btn btn-light btn-sm'>View Project</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 position-relative">
          <img
            src={todo}
            className="img-fluid rounded frame"
            alt="Project 2"
          />
          <div className="position-absolute start-0 end-0 bottom-0 top-0 bg-dark rounded bg-opacity-75 opacity-0 hover-opacity-100 text-white p-2 text-center d-flex flex-column justify-content-center">
            <p className="mb-2">A simple React Todo App to add, edit, delete, and filter tasks by status. Built with reusable components, responsive UI, and clean design..</p>
            <a href="https://thetodoapplication.netlify.app/" className='btn btn-light btn-sm'>View Project</a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 position-relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebUirlx1eGHbXwZfzfG4HVc622QRl-kgMNQ&s"
            className="img-fluid rounded frame"
            alt="Project 3"
          />
          <div className="position-absolute start-0 end-0 bottom-0 top-0 bg-dark rounded bg-opacity-75 opacity-0 hover-opacity-100 text-white p-2 text-center d-flex flex-column justify-content-center">
            <p className="mb-2"> A React app to calculate student cutoff marks, assign courses, and manage student profiles with image upload, storage, and course-wise filtering.</p>
            <a href="https://cutoff-p3.netlify.app/" className='btn btn-light btn-sm'>View Project</a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 position-relative">
          <img
            src={food}
            className="img-fluid rounded frame"
            alt="Project 4"
          />
          <div className="position-absolute start-0 end-0 bottom-0 top-0 bg-dark rounded bg-opacity-75 opacity-0 hover-opacity-100 text-white p-2 text-center d-flex flex-column justify-content-center">
            <p className="mb-2">This is a full-stack food delivery application built with React (frontend) and Node.js + Express + MongoDB (backend).</p>
            <a href="https://food-delivery-p4.netlify.app/" className='btn btn-light btn-sm'>View Project</a>
          </div>
        </div>

           {/* Project 5 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 position-relative">
          <img
            src={movieBooking}
            className="img-fluid rounded frame"
            alt="Project 5"
          />

          <div className="position-absolute start-0 end-0 bottom-0 top-0 bg-dark rounded bg-opacity-75 opacity-0 hover-opacity-100 text-white p-2 text-center d-flex flex-column justify-content-center">
            <p className="mb-2">A full-stack MERN Movie Booking App with React frontend and Node.js backend, featuring movies, theatres, shows, seat booking, and orders.</p>
            <a href="https://movie-bookingp-5.netlify.app/" className='btn btn-light btn-sm'>View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
