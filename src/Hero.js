import React from 'react';
import Heropic from  './Hero.jpeg';
import './styles/hero.css';
import { useTypewriter ,Cursor} from 'react-simple-typewriter';
import { Typewriter } from 'react-simple-typewriter'

 
export default function Hero() {
const {text}=useTypewriter({
words:['Developer','Designer','Freelancer'],
loop:0,
typeSpeed:120,

})

  return (
    <div className='hero-container'>
        <div className='hero-img'>
            <img src={Heropic} alt="hero" />
        </div>
      <div className='hero-text'>
            {/* <h1>I'm a <span style={{fontWeight:'bold',color:'green'}}>{text}</span><span style={{color:'red'}}><Cursor/></span></h1> */}
            <h1>I'm a <span  style={{fontWeight:'bold',color:'green'}}><Typewriter
            words={['Developer','Designer','Freelancer']}
            loop={5}
            cursor
            cursorStyle='<'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></span></h1>
            <p>
            Experienced Full-Stack Developer proficient in Next.js,
React.js, and TailwindCSS for frontend development,
with expertise in Express, Node.js, MongoDB for
backend implementation. Skilled in translating designs
into high-quality code, building reusable components,
and optimizing applications for a seamless user
experience. Dedicated to delivering robust solutions
and staying updated with the latest technologies to
drive innovation and efficiency in development
processes.
            </p>
            <a href='./Ajay-arava.pdf' className='button'>Download</a>
      </div>
    </div>
  )
}
