import React from 'react';
import ahmed from '../img/ahmed.jpg';

const About = () => {
  return (
    <div>
      <div className="content">

        <div className="title">
  
          <div className="hide">
            <h2>we work to make</h2>
          </div>

          <div className="hide">
            <h2><span>Dreams</span> come</h2>
          </div>

          <div className="hide">
            <h2>True</h2>
          </div>

        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum quia consequatur quidem maiores harum.</p>
        <button>Lorem, ipsum.</button>
      </div>
      <div className="image">
        <img  src={ahmed} alt="ahmed"/>
      </div>
    </div>
  )
}

export default About
