import React from 'react';
import '../styles/Navbar.css';
import resume from '../Assets/Coreys Resume 5.pdf'

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  navbarStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

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
