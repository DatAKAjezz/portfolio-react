/* eslint-disable react/prop-types */
import  { useEffect, useRef } from "react";
import { FaMoon } from "react-icons/fa";
import { } from "react-icons/hi";
import {  IoSunny } from "react-icons/io5";

const ModeChanger = ({refs, onClick, isClicked }) => {

    const refPar = useRef(null);
    const refBtn = useRef(null);

    // refs from others components
    const refHeader = refs.header;
    const refIntro = refs.intro;

    useEffect(() => {
        if (!isClicked){
            refBtn.current.style.transform = 'translateY(30px)'
            refPar.current.style.backgroundColor = "grey"

            refHeader.current.classList.add('light-mode-header')
            refIntro.current.classList.add('light-mode')
            document.body.style.backgroundColor = "white"
        }   
        else{
            refBtn.current.style.transform = 'translateY(0px)';
            refPar.current.style.backgroundColor = "rgb(0, 110, 255)";

            refHeader.current.classList.remove('light-mode-header');
            refIntro.current.classList.remove('light-mode')

            document.body.style.backgroundColor = 'black';
        }
    }, [isClicked])

  return (
    <div className="mc-button-container mode-changer-landing">
        <FaMoon id = 'moon-icon'
                style={{fill: isClicked ? 'yellow' : 'grey', fontSize: isClicked ? '2.4rem' : '2rem'}} /> 
        <div className="mc-button-wrapper"
             title = "Ctrl + M"
             ref = {refPar}
             onClick={() => {
                onClick()
             }}
             >
            <div className="mc-button" ref = {refBtn}>   
            </div>
        </div>
        <IoSunny id = 'sun-icon'
                 style = {{fill: !isClicked ? 'orange' : 'grey', fontSize: !isClicked ? '3rem' : '2.4rem'}}
        />
    </div>
  );
};

export default ModeChanger;
