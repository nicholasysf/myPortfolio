import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders';

const About = () => {
    const [letterClass,setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return(
        <>
        <div className="container about-page">
            {/* MY INFORMATION HERE */}
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>I'm Nicholas, a fresh graduate from Singapore Institute of technology, majoring in Electrical Engineering and Information Technology. I'm currently looking for job opportunities as a front-end developer. </p>
                <br/>
                <p>I'm building my software development capabilities by working on Frontend development projects using languages and frameworks like HTML5, CSS3, Javscript, SASS, REACTJS, GIT and many more. Ultimately, I aim to transit into a full stack developer, specifically specializing in the MERN stack. </p>
                <br/>
                <p>Should you have any opportunities and feel that I am a good fit, do reach out and contact me. </p>
            </div>
            {/* ROTATING CUBE ANIMATION HERE */}
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faSass} color="#EC4D28"/>
                    </div>
                </div>    
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}


export default About;