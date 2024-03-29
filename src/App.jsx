import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import ServicesExperience from './components/ServicesExperience'
import Projects from './components/Projects'
import Footer from './components/Footer'




function App() {
  return (
    <div className="App">

      <Header/>
      <Banner/>
      <ServicesExperience/>
      <Projects/>
   
      <Footer/>
    </div>
  )
}

export default App
