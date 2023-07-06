import skills from './styles/skills.css'

const Skills = () => {
  return (
    <>
      <section className='skill' id='skills'>
        <div className='skill__title'>
          <h1 className='skill__title-title'>Skillset</h1>
          <p className='skill__title-body'>With skills in over 3 different fields of programmer,
          I would be a perfect option to hire when it comes to a full fledged project.
          Keep in mind that if you think it, I can create for you, I'm not scare to any challenge.</p>
        </div>
        
        <div className='skill__body'>
          <div className='skill__body-container'>
            <i className='bx bx-code-alt'></i>
            <h3 className='skill__body-title'>Frameworks</h3>
            <ul className='skill__body-list'>
              <li className='skill__body-item'>React</li>
            </ul>
          </div>
          <div className='skill__body-container'>
            <i className='bx bx-code-alt'></i>
            <h3 className='skill__body-title'>Languages</h3>
            <ul className='skill__body-list'>
              <li className='skill__body-item'>HTML</li>
              <li className='skill__body-item'>CSS</li>
              <li className='skill__body-item'>JavaScript</li>
            </ul>
          </div>
          <div className='skill__body-container'>
            <i className='bx bx-code-alt'></i>
            <h3 className='skill__body-title'>Source Control</h3>
            <ul className='skill__body-list'>
              <li className='skill__body-item'>Git/Github</li>
            </ul>
          </div>
        </div>
      </section>

        <div className='skill__pic'>
            <ul className='skill__pic-list'>
              <li className='skill__pic-item'>
                <img className='skill__pic-img' src="https://raw.githubusercontent.com/jmontes33/React-Portfolio/main/src/assets/html5.png" alt="html" />
              </li>
              <li className='skill__pic-item'>
                <img className='skill__pic-img' src="https://raw.githubusercontent.com/jmontes33/React-Portfolio/main/src/assets/css3.png" alt="css" />
              </li>
              <li className='skill__pic-item'>
                <img className='skill__pic-img' src="https://raw.githubusercontent.com/jmontes33/React-Portfolio/main/src/assets/javascript.png" alt="js" />
              </li>
              <li className='skill__pic-item'>
                <img className='skill__pic-img' src="https://raw.githubusercontent.com/jmontes33/React-Portfolio/main/src/assets/react.png" alt="react" />
              </li>
              <li className='skill__pic-item'>
                <img className='skill__pic-img' src="https://raw.githubusercontent.com/jmontes33/React-Portfolio/main/src/assets/github.png" alt="react" />
              </li>
            </ul>
          </div>
    </>
  )
}

export default Skills