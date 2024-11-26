/* eslint-disable react/prop-types */
import "../CSS/SkillContainer.css";
import "../CSS/Mode.css"
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import useDisplayMessage from './../Hooks/useDisplayMessage';

const SkillContainer = ({isClicked}) => {

  let skillMessage = "skills";
  const [isSkillDisplayed, setIsSkillDisplayed] = useState(false);
  const { displayedMessage: displayedSkillMessage } = useDisplayMessage(
    isSkillDisplayed ? skillMessage : "", 120, "after-intro"
  );

  
  const skillTitleRef = useRef(null);

  return (
    <div className="skill-super-container" id="skill-section">
      <motion.div 
        className={`skill-container ${!isClicked ? 'light-mode' : ''}`} 
        whileInView={{ opacity: [0, 1], y: [150, 0] }} 
        transition={{ duration: 0.4 }}
        viewport={{once: 'true'}}
      >
        <h1 className="container-tags" style={{fontSize: '1.8rem'}}>{displayedSkillMessage}</h1>
        <motion.div 
          className="left-skill" 
          whileInView={() => {
              setIsSkillDisplayed(true)
              skillTitleRef.current.classList.add("skill-title-pop-up")
            }} 
        >
          <p>I am a passionate developer with a focus on building efficient and modern web applications.</p>
          <p>A developer with a love for learning and mastering new technologies.</p> 
          <p>With expertise in C++ for competitive programming and problem-solving.”</p>
        </motion.div>

        <motion.div className="right-skill">
          <div className="skill-groups">
            <div>
              <h3 
                style={{ fontSize: "1.5rem", textAlign: "center", color: "cyan" }}
                className="kanit-semibold"
                ref = {skillTitleRef}
              >
                LANGUAGES AND TECHS I FREQUENTLY USE
              </h3>
            </div>
            <div className="skill-group">
              <div className="icon-wrapper">
                  <div>
                    <img src = "html2.png"/>
                    <img src = "css-3.png"/>
                  </div>
                  <p>HTML/CSS</p>
              </div>
              {[
                { src: "js.png", label: "Javascript", bora: true },
                { src: "c++.png", label: "C++" },
                { src: "react2.png", label: "ReactJS" },
                { src: "gitbash.png", label: "Git" },
                { src: "nodejs3.png", label: "NodeJS", bora: true },
                { src: "firebase2.png", label: "FireBase", bora: true },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`icon-wrapper bora`}
                >
                  <div>
                    <img className={item.bora ? "bora" : ""} src={item.src} alt={item.label} />
                  </div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SkillContainer;
