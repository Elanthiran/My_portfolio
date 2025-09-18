import React from 'react'
import intro from "../assets/intro.png"

const Hero = () => {
  return (
    <section  className='container-fluid px-5 py-5 background '>
      <div className='row align-items-center'>
        {/* Left Section: Text */}
        <div className='col-12 col-md-6 d-flex justify-content-center '>
          <div>
            <h1>
              Hi,<br />
              <span>I'm K Elanthiran</span>
            </h1>
            <p>Full-stack Developer</p>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className='col-12 col-md-6 d-flex justify-content-center'>
          <img src={intro} className='img-fluid' alt="intro-img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
