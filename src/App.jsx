import { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faSquareTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';  


function App() {

  const [activeItem, setActiveItem] = useState('home');

  const quote = "'"
  const message = "hi, jezz is here...";
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [visibilityState, setVisibilityState] = useState('visible');

  useEffect(() => {
    if (displayedMessage.length < message.length) {
      const timer = setTimeout(() => {
        setDisplayedMessage(message.slice(0, displayedMessage.length + 1));
      }, 120);
      return () => clearTimeout(timer);
    } else if (displayedMessage.length === message.length) {
      const timer = setTimeout(() => setVisibilityState('fading'), 1500);
      return () => clearTimeout(timer);
    }
  }, [displayedMessage, message]);

  useEffect(() => {
    if (visibilityState === 'fading') {
      const timer = setTimeout(() => setVisibilityState('hidden'), 1000);
      return () => clearTimeout(timer);
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
          <h1>{displayedMessage}</h1>
        </div>
      ) : (
        <div>
          <header className="header">
            <h1>_jezz</h1>
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
              <img src="./intro.png" alt="Intro" />
            </div>
            <div className='right-intro'>
              <div className='intro-message'>
                <p>My name is Dat {quote}jezz{quote} Hoang Tan</p>
                <p>Future JS FullStack Developer</p>
                <p style={{fontSize: '1.2rem'}}>From Dong Hoi City, Viet Nam.</p>
              </div>
              <div className='intro-icon-container'>
                <FontAwesomeIcon className = "intro-icons" icon={faGithub} fontSize="2.5rem"/>                
                <FontAwesomeIcon className = "intro-icons" icon={faSquareTwitter} fontSize="2.5rem"/>
                <FontAwesomeIcon className = "intro-icons" icon={faInstagram} fontSize="2.5rem"/>                
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default App;