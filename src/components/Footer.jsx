import footer from './styles/footer.css'

const Footer = () => {
  return (
    <div className='footer' id='contacts'>
      <div className='footer__title'>
        <img className='footer__logo' src="logo.jpeg" alt=""/>
        <div className='footer__icons'>
          <a href="https://wa.me/18097775787?text=Hi%20!!!%0AI'm%20Jorge.%20Welcome." target='blank'>
            <i className='bx bxl-whatsapp' style={{color:'#146C94'}}></i>
          </a>
          <a href="https://www.instagram.com/j_uz01/" target='blank'>
            <i className='bx bxl-instagram' style={{color:'#146C94'}} ></i>
          </a>
          <a href="www.linkedin.com/in/jorge-luis-uceta-familia-b79b18281" target='blank'>
            <i className='bx bxl-linkedin-square' style={{color:'#146C94'}}></i>
          </a>
        </div>
      </div>

      <div className='footer__body'>
        <ul className='footer__body-list'>
          <div className='footer__body-left'>
            <a href="#home">
              <li className='footer__body-items'>Home</li>
            </a>
            <a href="#experience">
              <li className='footer__body-items'>Experience</li>
            </a>
            <a href="#skills">
              <li className='footer__body-items'>Skills</li>
            </a>
            <a href="#projects">
              <li className='footer__body-items'>Projects</li>
            </a>
          </div>
          <div className='footer__body-right'>
            <a href="https://twitter.com/ucetajorge?s=21&t=0uueRYXq2B8sspokJzK2Rg" target='blank'>
              <i className='bx bxl-twitter' style={{color:'#146C94'}} >@UcetaJorge</i>
            </a>
            <i className='bx bx-at' style={{color:'#146C94'}}>jorgeuz01@hotmail.com</i>
          </div>
        </ul>
      </div>


    </div>
  )
}

export default Footer