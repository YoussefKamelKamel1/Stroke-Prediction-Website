import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Form from './Components/Form/Form'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Form/>
      <Contact/>
    </div>
  )
}

export default App
