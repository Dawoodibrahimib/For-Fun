import React, { useEffect, useRef, useState } from "react";
import bgsound from "./assets/bgsound.mp3";
import Profilepic from "./assets/hello.png";
import meow from "./assets/meow.png";

function Main_Button() {
  const audioRef = useRef(null);
  const [buttonStyle, setButtonStyle] = useState({}); // State to manage button style
  const [showContent, setShowContent] = useState(true); // State to control content visibility
  const [acceptCount, setAcceptCount] = useState(0); // State to track the number of accept button presses
  const [buttonHeight, setButtonHeight] = useState(60); 
  const [buttonDimensions, setButtonDimensions] = useState(100); // Initial dimensions of the button

 



  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 29; // Adjust to the desired start time in seconds
      audioRef.current.play();
    }
  }, []); // This useEffect runs once when the component mounts

  function playSound() {
    if (audioRef.current) {
      audioRef.current.play();
      const element1 = document.getElementById('myElement1');
      const element2 = document.getElementById('myElement2');
      const accept_Button = document.getElementById("mybtn");
      const decline_Button = document.getElementById("mybtn1");
      const span_id = document.getElementById("ring");
      
      element1.style.transition = 'opacity 0.5s ease';
      element1.style.opacity = '0';
      element2.style.transition = 'opacity 0.5s ease';
      element2.style.opacity = '0';
      accept_Button.style.display = 'none';
      decline_Button.style.display = 'none';
      span_id.style.transition = "opacity 1s ease";
      span_id.style.opacity = "1";
      
      // Increment accept count
      setAcceptCount(prevCount => prevCount + 1);
    }
  }

  function moveButton() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = 100; // Adjust button width
    const buttonHeight = 40; // Adjust button height
    const margin = 20; // Increase the margin
    const acpbtn = document.getElementById("mybtn");
    setButtonHeight(prevHeight => prevHeight + 20);
    setButtonDimensions(preWidth => preWidth + 20);
  
    

    // Calculate new positions with margin
    const newLeft = Math.floor(Math.random() * (screenWidth - buttonWidth - 2 * margin)) + margin;
    const newTop = Math.floor(Math.random() * (screenHeight - buttonHeight - 2 * margin)) + margin;

    // Update button style with new position
    setButtonStyle({
        position: 'absolute',
        left: `${newLeft}px`,
        top: `${newTop}px`,
        transition: 'left 0.1s, top 0.1s' // Add transition effect
    });
    
  }

  const [pressed, setPressed] = useState(false);

  function pressButton()
  {
      const distext = document.getElementById("Aftertext");
      distext.style.transition = 'opacity 0.5s ease';
      distext.style.opacity = '0';
  };

  return (
    <>
    {showContent && (
      <>
        <img src={Profilepic} alt="hellokitty" className='img1' id = "myElement1"></img>
        <div>
          <h1  id = "myElement2">I  want you to be mine Muqadas  <span>💘</span> </h1>
        </div>
      </>
    )}
    <div className="Main_container">
      
        <div className="container">
          <button className="btn" onClick={playSound} id="mybtn" style={{ width: `${buttonDimensions}px`, height: `${buttonHeight}px` }} >
            Accept
          </button>
          <button className="btn" onClick={moveButton} style={buttonStyle} id="mybtn1">
            Decline
          </button>
        </div>
      <div className="audio-container">
        <audio ref={audioRef}>
          <source src={bgsound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>

    <div id="ring">
    <h1 id="Aftertext">Place Your Finger on circle Muqadas </h1>
    <div className="Hitbox">
    <button id="pushbutton" onClick={pressButton} disabled={pressed} >💍</button>
    <h1>Will you be mine forever Muqadas 👉👈</h1>
    <img src={meow} alt="kity" className="Imgcute"></img>
    </div>
    </div>
 <div id="mydiv"></div>
 
    </>
  );
}

export default Main_Button;
