import React, { useState, useEffect } from "react";
import Robot from "../assets/robot.gif";

const Welcome=()=> {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <>
    
    <div className="welcomecomp">
    
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
      <br /><br />
      
    </div>
    
    </>
  );
}


export default Welcome;