import React from 'react';
import '../styles/footer.css';


function Footer() {
  return (
    <footer>
        <aside className = "left">
            <h1 id = "contactMe">Contact Me</h1>  
        </aside>

        <main className = "right">

            <ul className = "contactLinks">
                <li>781-426-1186</li>
                <li><a href= "mailto:coreynance83@gmail.com">coreynance83@gmail.com</a></li>
                <li><a href = "https://github.com/coreyNance" target = "_blank">github</a></li>
                <li><a href = "https://www.linkedin.com/in/corey-nance-87139841/" target = "_blank">Linkedin</a></li>
                <li><a href = "https://twitter.com/CoreyNsrt" target = "_blank">Twitter</a></li>
            </ul>

        </main>
    </footer>
  );
}


export default Footer;
