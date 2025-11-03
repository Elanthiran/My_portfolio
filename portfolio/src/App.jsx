import React from 'react'
import Header from './components/Header'
import "./App.css"
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contacts from './components/Contacts'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
    <About />
    <Projects />
    <Resume />
    <Contacts />
    </div>
  )
}

export default App