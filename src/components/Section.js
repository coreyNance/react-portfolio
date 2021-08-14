import React from 'react';
import '../styles/Section.css';
import myPic from '../Assets/images/myImage.jpg'



function Section1() {
  return (
    <section>
      <aside className = "left">
      <h1 id ="aboutMe">About Me</h1>
      <img className = "myFace" src={myPic} width = "300" height = "300" alt = "Picture of me."/>
      </aside>
      <main className = "right">
            <p>  I am a Software Development student at UNH's bootcamp as well as a Software Engineering student at SNHU's Bachelor Degree program I'm from the United States, born in Boston MA and raised in Malden MA and current live in Salem NH.. My all time favorite hobby is racing cars as well as working on cars, in the performance enhancing way.  I also enjoy the causual video game whenever I can, mainly racing games. Ultimatly, I enjoy any kind of software developing, but my dream job would most likely be developing performance programs for a racing team where I may be afforded the opportunity to test out my work on a closed course. Why do you want to be a web developer? I enjoy technology, one of my favorite things to do is to enhance and push a car's performance to the limits which takes alot of creativity to achiveve that goal. I also love the technology behind software development which becoming a developer gives me the best of both worlds.
            </p>
        </main>
    </section>
  );
}


export default Section1;
