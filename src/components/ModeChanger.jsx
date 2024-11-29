/* eslint-disable react/prop-types */
import  { useEffect, useRef } from "react";
import { FaMoon } from "react-icons/fa";
import { } from "react-icons/hi";
import {  IoSunny } from "react-icons/io5";

const ModeChanger = ({refs, onClick, isClicked }) => {

     const refPar = useRef(null);

    // refs from others components
    const refHeader = refs.header;
    const refIntro = refs.intro;
    const refNav = refs.nav;

    useEffect(() => {
        if (!isClicked){
            refPar.current.style.backgroundColor = 'rgb(103, 105, 106)';

            refNav.current.classList.add('light-mode-nav');
            refHeader?.current.classList.add('light-mode-header')
            refIntro?.current.classList.add('light-mode')
            document.body.style.backgroundColor = "white"
        }   
        else{
            refPar.current.style.backgroundColor = 'rgb(15, 15, 191)';

            refNav.current.classList.remove('light-mode-nav');
            refHeader?.current.classList.remove('light-mode-header');
            refIntro?.current.classList.remove('light-mode')
            document.body.style.backgroundColor = 'black';
        }
    }, [isClicked])

  return (
    <div className="mc-button-container mode-changer-landing">
        <div className="mc-button-wrapper"
             title = "Ctrl + M"
             onClick={() => {
                onClick()
             }}
             ref = {refPar}
        >
            <FaMoon id = 'moon-icon'
                style={{fill: 'yellow', fontSize: isClicked ? '2rem' : '0rem'}} 
            /> 
            <IoSunny id = 'sun-icon'
                 style = {{fill: 'orange', fontSize: !isClicked ? '2.5rem' : '0rem'}}
            />
        </div>
    </div>
  );
};

export default ModeChanger;
