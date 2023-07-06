import projects from './styles/projects.css'

const Projects = () => {
  return (
    <div className='project' id='projects'>
        <div className='project__title'>
            <h4 className='project__title-title'>My projects</h4>
            <h2 className='project__title-body'>Work that I've done during Academlo's course</h2>
        </div>
        <div className='project__body'>
            <a className='project__body-item' href="https://weatherapp-by-jorgeuceta.netlify.app" target='blank'>
                <img className='project1' src="p1.png" alt="" />
                <h3>Weather App</h3>
                <p>A single page application which can tell you the weather, tempeture, location and more. This was developed by teacher and academlo students</p>
            </a>
            <a className='project__body-item' href="https://user-register-by-jorge-uceta.netlify.app" target='blank'>
                <img className='project2' src="p2.png" alt="" />
                <h3>Register</h3>
                <p>Here we have a register, it show you a pop where you can register and then it showing you the information placed in the main page</p>
            </a>
            <a className='project__body-item' href="https://pokedex-by-jorge-uceta.netlify.app" target='blank'>
                <img className='project3' src="p3.png" alt="" />
                <h3>Pokedex</h3>
                <p>If you're a big fan of Pokemon, here I have the perfect guide for you, in there you can fin all the details from every Pokemon. Go ahead and catch them all!!!</p>
            </a>
            <a className='project__body-item' href="https://e-commerce-react-by-jorge-uceta.netlify.app" target='blank'>
                <img className='project4' src="p4.png" alt="" />
                <h3>E-commerces</h3>
                <p>This E-commerces is especial for you, here you can see multiples articles and things that you'd like it. Click to see it.</p>
            </a>
        </div>
    </div>
  )
}

export default Projects


// POKEMON
// https://pokedex-by-jorge-uceta.netlify.app

// REGISTER
// https://user-register-by-jorge-uceta.netlify.app

// E-COMMERCE 2
// https://e-commerce-react-by-jorge-uceta.netlify.app

// WEATHER
// https://weatherapp-by-jorgeuceta.netlify.app

