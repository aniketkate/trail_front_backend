import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import thoughtsData from "./thoughtsData";
import "./Hero2style.css"

function HomeComponent2(props) {
    const [thought, setThought] = useState(thoughtsData[0]);

    const updateThought = () => {
      const today = new Date();
      const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
      const index = dayOfYear % thoughtsData.length;
      setThought(thoughtsData[index]);
    };
  
    useEffect(() => {
      updateThought(); // set initial thought when component mounts
      const intervalId = setInterval(() => {
        updateThought(); // update thought every 24 hours
      }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
      return () => clearInterval(intervalId); // clear interval when component unmounts
    }, []);

  return (
    <div className="content">
      <div className="userinfo">
        <Link className="user">
          <i className="fas fa-user"></i>
          <h1>{props.username}</h1>
        </Link>
        <Link className="info1">
            <h3>Streak</h3>
            <h3>Coins</h3>
            <h3>Leader Board</h3>
        </Link>
      </div>
      <div className="divisions">
        <div className="values">
          <Link to="/">
            <h1>Values in Story</h1>
          </Link>
        </div>
        <div className="values">
          <Link to="/">
            <h1>Fill in the blanks</h1>
          </Link>
        </div>
        <div className="values">
          <Link to="/quize">
            <h1>Match the pairs</h1>
          </Link>
        </div>
        <div className="values">
          <Link to="/" >
            <h1>Short story</h1>
          </Link>
        </div>
        <div className="values">
          <Link to="/">
            <h1> Quiz</h1>
          </Link>
        </div>
      </div>
      <div className="thoughts">
           <h2>"Quote for the Day"</h2>
           <p>{thought.text}</p>
           <p>- {thought.author}</p>
      </div>
    </div>
  );
}
export default HomeComponent2;
