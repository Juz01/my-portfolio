
import './App.css'

const App = () => {
  

  return (
    <div className='container'>

        {/* home */}
        <div className='nav__container'>
          <nav className='navbar'>
            <div className='nav__logo'>
              <a href="#home" id='home'>
                <img src="./logo.jpeg" className='logo' alt="logo" />
              </a>
            {/* <div className='box'></div> */}
            </div>
            
            <ul className='nav__item'>
              <a href="#about-me">
                <li className='items'>About Me</li>
              </a>
              <a href="#skills">
                <li className='items'>Skills</li>
              </a>
              <a href="#contacte-me">
                <li className='items'>Contact Me</li>
              </a>
            </ul>
          </nav>
        </div>
      

        {/* About me */}
        <div className='about-me__container'>
          <div className='about-me' id='about-me'>
            <div>
              <img src="./presentation.jpeg" className='presentation__img' alt="presentation" />
            </div>
            <div className='about-me__presentation'>
              <h1 className='about-me__info'>I'm Jorge Luis Uceta. A Full Stack Developer <span>From Dominican Rep.</span></h1>
              <p className='about-me__body'>
                Soy un joven de <span>Republica Dominicana</span>, que como una persona proactiva me gusta esta siempre <span>aprender</span> cosas nuevas, <span>sin miedo</span> a equivocarme y con todo el animo de poder <span>superar</span> cualquier barrera. <br />
                Actualmente estudiando en <span className='academlo'>Academlo</span>, en el cual junto con los demas compañeros hemos realizados varios <span>proyectos</span>, con el motivo de poder llegar a ser un <span>Senior Developer</span>. <br />
                Como hobbie me gusta pasar tiempo con mi familia, escuchar musica, ejercicios y bueno pues programar tambien, estas son pequeños detalles sobre mi.
              </p>
              </div>
          </div>
        </div>
      

        {/* Skills */}
      <section className='skills' id='skills'>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>
      
        {/* Contact Me */}
      <footer className='contacte-me' id='contacte-me'>
        WS, IG, TW, Email, Linkedin
        <a href="#home">Go up</a>
      </footer>
      
    </div>
  )
}

export default App
