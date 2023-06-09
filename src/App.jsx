
import './App.css'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Linkedin from './components/Linkedin'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'


const App = () => {
  

  return (
    <div className='app'>
      <NavBar />
      <Experience />
      <Linkedin />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
