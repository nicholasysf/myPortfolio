import  './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'


const Contact = () => {
    const conArray = ['C','o','n','t','a','c','t',' ','m','e'];
    const form = useRef();

    const [letterClass,setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs
            .sendForm('service_834mzsp','template_jx4o8l8', form.current ,'BSlf-pskiI8hJKY2i')
            .then(() =>{
                alert('Message succesfully sent!')
                window.location.reload(false)
            },
            () =>{
            alert('Failed to send the message, please try again!')}
            )
    }
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        strArray={conArray} 
                        idx={15}
                        letterClass={letterClass}/>
                    </h1>
                    <p>
                        Feel free to contact me below if you have any opportunities for me.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text"name="name"placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required/>
                                </li>
                                <li>
                                    <input type="text" name='subject' placeholder='Subject' required/>
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required/>
                                </li>
                                <li>
                                     <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact