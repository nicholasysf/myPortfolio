import { Link } from "react-router-dom"
import './index.scss'
import { useState, useEffect } from "react"
import AnimatedLetters from "../AnimatedLetters"
import profile from "../../assets/images/profile.png"
import Loader from "react-loaders"
const Home = () =>{
    const [letterClass,setLetterClass] = useState('text-animate');
    const nameArray = [' ','n','i','c','h','o','l','a','s'];
    const jobArray = ['a','n',' ','a','s','p','i','r','i','n','g',' ','w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 5000)
      }, [])

    return(
    <>  
        <div className="container home-page">
            {/* TEXT AREA */}
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span> 
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                <br/>
                </h1>
                <h2>Frontend developer.</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            {/* CLAY AVATAR */}
            <a target="_blank" rel="noreferrer" href="https://github.com/nicholasysf/myPortfolio" className="clay">
                <img src={profile} alt="profile"></img>
            </a>
        </div>
        <Loader type="pacman"/>
    </>  
    )
}

export default Home