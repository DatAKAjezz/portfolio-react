import "../CSS/SkillContainer.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";
import useDisplayMessage from './../Hooks/useDisplayMessage';

const SkillContainer = ({scrollYProgress}) => {

  let skillMessage = "Skills";
  const [isSkillDisplayed, setIsSkillDisplayed] = useState(false);
  
  const { displayedMessage: displayedSkillMessage } = useDisplayMessage(
    isSkillDisplayed ? skillMessage : "", 120, "after-intro"
  )

  return (
    <div className="skill-super-container" id = "skill-section">
      <motion.div className="skill-container" 
                  whileInView={{opacity: [0, 1], y: [200, 0]}} 
                  transition={{duration: 0.4}}
                  viewport={{ once: true }}
      >
        <h1 className="container-tags">{displayedSkillMessage}</h1>
        <motion.div className= "left-skill" 
                    whileInView={() => {
                      setIsSkillDisplayed(true);
                      }} 
        >
          <p>My passion for learning new technologies has driven me to constantly improve, and I am always 
              eager to tackle new challenges that require innovative solutions. Below are some of the 
              technologies I regularly work with.</p>
        </motion.div>

        <motion.div className="right-skill">

        <div className="skill-groups">
          <div className="skill-group">

          </div>
          
          <div className="skill-group">
            <h3>Backend</h3>
          </div>
        </div>

        </motion.div>

      </motion.div>
    </div>
  );
}

SkillContainer.propTypes = {
  scrollYProgress: PropTypes.number.isRequired
}

export default SkillContainer;
