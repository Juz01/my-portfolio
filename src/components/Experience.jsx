import experiences from './styles/experiences.css'

const Experience = () => {
  return (
    <article className='exp' id='experience'>
        <div className='exp__title'>
            <h4 className='exp__title-head'>Work Experience</h4>
            <h1 className='exp__title-body'>Companies I have worked for in the past.</h1>
        </div>
        <div className='exp__body'>
            <div className='exp__body-box'>
                <h2 className='exp__body-num'>01</h2>
                <span className='exp__body-company'>Data Vimenca</span>, <span className='exp__body-position'>Customer services</span>
                <p className='exp__body-text'>I was one of the top performance in 
                    the campain of Data Vimenca which was 
                    Western Union.</p>
            </div>

            <div className='exp__body-box'>
                <h2 className='exp__body-num'>02</h2>
                <span className='exp__body-company'>S2G</span>, <span className='exp__body-position'>Customer services</span>
                <p className='exp__body-text'>I've worked with them for a year and 4 month, 
                    and I was getting better skills working in a team.</p>
            </div>

            <div className='exp__body-box'>
                <h2 className='exp__body-num'>03</h2>
                <span className='exp__body-company'>Alphacon</span>, <span className='exp__body-position'>Customer services</span>
                <p className='exp__body-text'>In Alphacon everything was different and 
                    my skills of vocabulary got improved.
                </p>
            </div>
        </div>
    </article>
  )
}

export default Experience