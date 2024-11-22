import  { useState, useRef } from "react";
import { FaMoon } from "react-icons/fa";
import {  IoSunny } from "react-icons/io5";

const ModeChanger = () => {

    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const refPar = useRef(null);

    const handleModeChanger = (e) => {
        setIsButtonClicked(prev => !prev);
        if (isButtonClicked){
            e.target.style.transform = 'translateY(30px)'
            refPar.current.style.backgroundColor = 'grey';
        }
        else{
            e.target.style.transform = 'translateY(0px)';
            refPar.current.style.backgroundColor = 'rgb(0, 110, 255)';
        }
    }

  return (
    <div className="mc-button-container">
        <FaMoon id = 'moon-icon'
                style={{fill: !isButtonClicked ? 'yellow' : 'grey'}} /> 
        <div className="mc-button-wrapper"
             ref = {refPar}>
            <div className="mc-button" onClick={(e) => {
                handleModeChanger(e)
            }}>   
            </div>
        </div>
        <IoSunny id = 'sun-icon'
                 style = {{fill: isButtonClicked ? 'orange' : 'grey'}}
        />
    </div>
  );
};

export default ModeChanger;
