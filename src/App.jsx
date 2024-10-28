import { useState, useEffect } from 'react';
import './CSS/App.css';
import useDisplayMessage from './Hooks/useDisplayMessage';
import { FaGithub, FaInstagram, FaTwitterSquare, FaLinkedin, FaBars } from 'react-icons/fa'; // Thêm FaBars icon
import SkillContainer from './components/SkillContainer';
import { motion, useScroll } from 'framer-motion';
import Contact from './components/Contact';

function App() {
  const [activeItem, setActiveItem] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false); // Trạng thái menu
  const introMessage = "hi, i'm jezz...";
  const [showIntroMessage, setShowIntroMessage] = useState(false);
  const { scrollYProgress } = useScroll();

  const { displayedMessage: displayedIntroMessage, visibilityState } = useDisplayMessage(introMessage, 120, "intro");

  const { displayedMessage: introMessage1 } = useDisplayMessage(
    showIntroMessage ? "HI, my name is Dat 'jezz' Hoang Tan" : "", 
    50, 
    "after-intro"
  );

  const { displayedMessage: introMessage2 } = useDisplayMessage(
    showIntroMessage ? "Future JS FullStack Developer" : "",
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
    const yOffset = -180;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
    window.scrollTo({ top: y, behavior: "smooth" });
  };

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
          <header className="header header-animation">
            <h1 style={{fontSize: "2.4rem"}}>_jezz</h1>

            {/* Icon menu */}
            <div className="menu-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
              <FaBars />
            </div>

            <nav>
              <ul>
                <li onClick={() =>{
                  setActiveItem('home');
                  setIsNavOpen(false); // Đóng menu sau khi chọn mục
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }} >Introduction</li>
                <li onClick={() =>{
                  setActiveItem('skill');
                  setIsNavOpen(false); // Đóng menu sau khi chọn mục
                  scrollToSectionWithMargin("skill-section");
                }} >Skill</li>
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
            <div className="intro-container">
              <h1 className="container-tags" style={{fontSize: '1.8rem'}}>{tagMessage}</h1>
              <div className='right-intro '>
                <div className='intro-message'>
                  <p style={{fontSize: '1.3rem'}}>{introMessage1}.</p>
                  <p style={{color: 'cyan'}}>{introMessage2}.</p>
                  <p style={{fontSize: '1.2rem'}}>{introMessage3}.</p>
                </div>
                <div className='intro-icon-container'>
                  <a href="https://github.com/DatAKAjezz" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='github-icon intro-icons icon-animation'/>
                  </a>                
                  <FaTwitterSquare className="twitter-icon intro-icons icon-animation"/>
                  <FaInstagram className="insta-icon intro-icons icon-animation" /> 
                  <FaLinkedin className="linkedin-icon intro-icons icon-animation" />          
                </div>
              </div>

              <div className='left-intro'>
                <div className="left-intro-image">
                  <img className='intro-image-popup' src="./intro.png" alt="Intro" />
                </div>
              </div>

            </div>
          </motion.div>
          {/* Skills */}
          <SkillContainer scrollYProgress={scrollYProgress} />

          {/* Contact */}
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
