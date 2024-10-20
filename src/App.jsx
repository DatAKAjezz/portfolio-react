import { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSquareTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import useDisplayMessage from './Hooks/useDisplayMessage';


function App() {
  const [activeItem, setActiveItem] = useState('home');
  const introMessage = "hi, i'm jezz...";
  const [showIntroMessage, setShowIntroMessage] = useState(false);

  const { displayedMessage: displayedIntroMessage, visibilityState } = useDisplayMessage(introMessage, 120, "intro");

  const { displayedMessage: introMessage1 } = useDisplayMessage(
    showIntroMessage ? "My name is Dat 'jezz' Hoang Tan" : "", 
    50, 
    "after-intro"
  );

  const { displayedMessage: introMessage2 } = useDisplayMessage(
    showIntroMessage ? "Future JS FullStack Developer" : "",
    90,
    "after-intro"
  )

  const { displayedMessage: introMessage3 } = useDisplayMessage(
    showIntroMessage ? "From Dong Hoi City, Viet Nam" : "",
    60,
    "after-intro"
  )

  useEffect(() => {
    if (visibilityState === "hidden") {
        setShowIntroMessage(true);
    }
  }, [visibilityState]);

  return (
    <div>
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
            <nav>
              <ul>
                <li onClick={() => setActiveItem('home')}>Home</li>
                <li onClick={() => setActiveItem('skill')}>Skills</li>
                <li onClick={() => setActiveItem('experience')}>Experiences</li>
                <li onClick={() => setActiveItem('contact')}>Contact</li>
                <div className={`animation active-${activeItem}`}></div>
              </ul>     
            </nav>
          </header>

          <div className="intro-container">
            <div className='left-intro'>
              <div className= "left-intro-image">
                <img className='intro-image-popup' src="./intro.png" alt="Intro" />
              </div>
            </div>
            <div className='right-intro '>
              <div className='intro-message'>
                <p>{introMessage1}.</p>
                <p>{introMessage2}.</p>
                <p style={{fontSize: '1.2rem'}}>{introMessage3}.</p>
              </div>
              <div className='intro-icon-container'>
                <FontAwesomeIcon className="intro-icons icon-animation" icon={faGithub} fontSize="2.5rem"/>           
                <FontAwesomeIcon className="intro-icons icon-animation" icon={faSquareTwitter} fontSize="2.5rem"/>
                <FontAwesomeIcon className="intro-icons icon-animation" icon={faInstagram} fontSize="2.5rem"/>                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
