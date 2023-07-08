import { useState } from 'react'
import navbar from './styles/navbar.styles.css'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    // This is the portfolio's Navbar
    <div className='nav__container'>
        <nav className='nav__nav'>
            <div className='nav__header'>
                {/* Home Logo */}
                <a href="#home" className='nav__logo'>
                    <img src="logo.jpeg" className='nav__img' alt="logo" />
                </a>

                <div className='nav__menu'>
                    {/* Menu Icon */}
                    <div className='nav__menu-icon'>
                        <i onClick={toggleMenu} className='bx bx-menu-alt-right'></i>
                    </div>

                    {/* NavBar options */}
                    <ul className={`nav__list ${isOpen ? "is-open" : ""}`}>
                        <li className='nav__item-ex'>
                            <a style={{color: 'white'}} href="#home">Home</a>
                        </li>
                        <li className='nav__item'>
                            <a style={{color: 'white'}} href="#experience">Experience</a>
                        </li>
                        <li className='nav__item'>
                            <a style={{color: 'white'}} href="#skills">Skills</a>
                        </li>
                        <li className='nav__item'>
                            <a style={{color: 'white'}} href="#projects">Projects</a>
                        </li>
                        <li className='nav__item'>
                            <a style={{color: 'white'}} href="#contacts">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Picture's presentation */}
            <div className='presentation__container'>
                <img src="j-u-z.jpeg" className='presentation-me' alt="me" />
            </div>

            <div className='nav__box'></div>

            {/* Presentation's Info */}
            <h1 className='nav__title'>
                I'm Jorge L. Uceta. A Junior Full Stack Dev. <span>From Dominican Rep.</span>
            </h1>
            <p className='nav__body'>
                Be sure I'm a person who wants alway learn new things and if you are trying to reach out a hard worker. <span>I'm your guy</span>.
            </p>
        </nav>
    </div>
  )
}

export default NavBar