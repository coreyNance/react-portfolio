import React from 'react';
import '../styles/Navbar.css';
import resume from '../Assets/Coreys Resume 5.pdf'

const styles = {
  navbarStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};



function Navbar() {
  return (
    <nav>
        <ul>
            <h2>
                <li><a href = "#aboutMe">About Me</a></li>
                <li><a href = "#work">Work</a></li>
                <li><a href = "#contactMe">Contact Me</a></li>
                <li><a href = {`${resume}`} download target= "_blank">Resume</a></li>
            </h2>
        </ul>
    </nav>
  );
}

export default Navbar;
