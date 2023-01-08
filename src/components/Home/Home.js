import React from 'react';
import "./Home.css";
import thewallpreview from "../../ProjectImages/thewallpreview.png";

const Home = () => {
  return (
    <div className='homeContainer'>
      <div className='aboutContainer'>
        <h2>About</h2>
        <p>
          Hi, my name is Charles. I'm a software developer. I'm currently focusing on web development 
          and building projects that I'm passionate about. My interest in software development began 
          in 2020 when I discovered Youtuber Michael Reeves and his extravegant robotic creations using 
          Python. At this point I learned the basics of programming through the book <a href=
          'https://automatetheboringstuff.com/' target='_blank' rel='noreferrer'><i>Automate the 
          Boring Stuff With Python</i></a> by Al Sweigart.
        </p>

        <p>
          Now I'm mainly working with Javascript and I'm happy to be contributing to the ever-expanding 
          web. Some of the tools I've been using are:
        </p>

        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>Axios</li>
          <li>Redux</li>
          <li>Railway</li>
          <li>Netlify</li>
        </ul>

      </div>
      <div className='projectsContainer'>
        <h2>Projects</h2>
        <div className='cardContainer'>
          <div className='card'>
            <a href='https://thewallroutebuilder.netlify.app' target='_blank' rel='noreferrer'>
              <img src={thewallpreview} alt='wallpreview' />
            </a>
            <p className='cardDescription'>
              Full-stack dynamic MERN application. 
              (MongoDB, Express, React, Node.js, Redux, Axios, Javascript, HTML, MUI, CSS)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;