import { useState, useEffect, useRef } from 'react';
import './CSS/App.css';
import './CSS/Mode.css'
import useDisplayMessage from './Hooks/useDisplayMessage';
import { FaGithub, FaInstagram, FaTwitterSquare, FaLinkedin, FaBars } from 'react-icons/fa'; 
import SkillContainer from './components/SkillContainer';
import { motion } from 'framer-motion';
import Contact from './components/Contact';
import ReactCountryFlag from "react-country-flag"
import ModeChanger from './components/ModeChanger';
import useEventKeyListenser from './Hooks/useEventKeyListenser';

function App() {

  // refs
  const refHeader = useRef(null);
  const refIntro = useRef(null);
  const refSkillContainer = useRef(null);

  // const modeList = ['tetMode', 'lightMode', 'christmasMode']

  const [activeItem, setActiveItem] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false); 
  const introMessage = "hi, i'm jezz...";
  const [showIntroMessage, setShowIntroMessage] = useState(false);

  const { displayedMessage: displayedIntroMessage, visibilityState } = useDisplayMessage(introMessage, 120, "intro");

  const { displayedMessage: introMessage1 } = useDisplayMessage(
    showIntroMessage ? "HI, my name is Dat 'jezz' Hoang Tan" : "", 
    50, 
    "after-intro"
  );

  const { displayedMessage: introMessage2 } = useDisplayMessage(
    showIntroMessage ? "JS FullStack Developer" : "",
    90,
    "after-intro"
  );

  const { displayedMessage: introMessage3 } = useDisplayMessage(
    showIntroMessage ? "From Dong Hoi City, Viet Nam" : "",
    60,
    "after-intro"
  );

  const { displayedMessage: tagMessage } = useDisplayMessage(
    showIntroMessage ? "about me" : "", 
    100,
    "after-intro"
  );

  useEffect(() => {
    if (visibilityState === "hidden") {
      setShowIntroMessage(true);
    }
  }, [visibilityState]);

  const scrollToSectionWithMargin = (section) => {
    const element = document.getElementById(section);
    const yOffset = -(window.innerHeight * 0.17);
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
  
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  //Mode Changer Listener
  const { modeListener: keyListener } = useEventKeyListenser();
  const [isModeButtonClicked, setIsModeButtonClicked] = useState(false);
  useEffect(() => {
    setIsModeButtonClicked(keyListener);
    console.log("App " + keyListener);
  }, [keyListener])

  const handleModeButtonClick = () => {
    setIsModeButtonClicked(prev => !prev);
  }

  return (
    <div className={isNavOpen ? 'nav-open' : ''}>
      {visibilityState !== 'hidden' ? (
        <div 
          style={{
            opacity: visibilityState === 'visible' ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }} 
          className='landing-greeting'
        >
          <h1>{displayedIntroMessage}</h1>
        </div>
      ) : (
        <div>
          <header className="header header-animation" ref = {refHeader}>
            <h1 style={{fontSize: "2.4rem", zIndex: "99"}}>_jezz</h1>

            {/* Icon menu */} 
            <div className="menu-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
              <FaBars className='navbar-toggle-button'/>
            </div>

            <nav>
              <ul>
                <li onClick={() =>{  
                  setActiveItem('home');
                  setIsNavOpen(false); 
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }} >Introduction</li>
                <li onClick={() =>{
                  setActiveItem('skill');
                  setIsNavOpen(false);
                  scrollToSectionWithMargin("skill-section");
                }} >Skills</li>
                <li onClick={() => {
                  setActiveItem('experience');
                  setIsNavOpen(false); // Đóng menu sau khi chọn mục
                }}>Experiences</li>
                <li onClick={() => {
                  setActiveItem('contact');
                  scrollToSectionWithMargin("contact-section")
                  setIsNavOpen(false); // Đóng menu sau khi chọn mục
                }}>Contact</li>
                <div className={`animation active-${activeItem}`}></div>
              </ul>     
            </nav>
          </header>
        {/*_____________________________________INTRO_______________________________________ */}
          <motion.div className='section1' 
                      whileInView={{opacity: [0, 1], y: [150, 0]}}
                      transition={{duration: 0.4}}
                      viewport={{once: 'true'}}
          >
            <div className="intro-container" ref = {refIntro}>
              <h1 className="container-tags" style={{fontSize: '1.8rem'}}>{tagMessage}</h1>
              <div className='right-intro top-intro '>
                <div className='intro-message'>
                  <p style={{fontSize: '1.3rem'}}>{introMessage1}.</p>
                  <p style={{color: 'cyan'}}>{introMessage2}.</p>
                  <p style={{fontSize: '1.2rem'}}>{introMessage3}.</p>
                  <ReactCountryFlag
                  countryCode="VN"
                  svg
                  style={{
                      width: '2em',
                      height: '2em',
                  }}
                  title="VietNam"
            />

                </div>
                <div className='intro-icon-container'>
                  <a href="https://github.com/DatAKAjezz" className = 'github-icon-container' target="_blank" rel="noopener noreferrer">
                    <FaGithub className='github-icon intro-icons icon-animation'/>
                  </a>                
                  <FaTwitterSquare className="twitter-icon intro-icons icon-animation"/>
                  <FaInstagram className="insta-icon intro-icons icon-animation" /> 
                  <FaLinkedin className="linkedin-icon intro-icons icon-animation" />          
                </div>
              </div>

              <div className='left-intro bottom-intro'>
                <div className="left-intro-image">
                  <img className='intro-image-popup' src="./avt.jpg" alt="Intro" />
                </div>
              </div>

            </div>
          </motion.div>
          {/* Skills */}
          <SkillContainer isClicked = {isModeButtonClicked}/>

          {/* Contact */}
          <Contact isClicked = {isModeButtonClicked}/>
          <ModeChanger refs = {{header: refHeader, intro: refIntro, skill: refSkillContainer}}
                       onClick={handleModeButtonClick}
                       isClicked = {isModeButtonClicked}
          />
        </div>
      )}
    </div>
  );
}

export default App; 
