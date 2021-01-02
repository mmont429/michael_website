import './App.css';
import React from "react";
import Navbar from "./Components/Navbar";
import backgroundPhoto from "./Components/BackgroundPhoto/backgroundPhoto"
import { Link, animateScroll as scroll} from "react-scroll";

function App() {
  const WelcomSection = createWelcomeSection();
  const AboutMeSection = createAboutMeSection();
  const ContactMe = createContactMeSection();
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      {/* Creating the welcome section*/}
      <section id="welcome">
        {WelcomSection}
      </section>
      </header>

      {/* Calling About me section*/}
      <section id="about">
        {AboutMeSection}
      </section>
      {/* Calling About me section*/}
      <section id="contact">
        {ContactMe}
      </section>
    </div>
  );
}

//Welcom part
function createWelcomeSection(){
  return(
    <div className="banner-wrapper">
      {backgroundPhoto()}
    <header className="App-header">
        <br/>
        <br/>
        <h1 className="App-title">Michael Montagnese</h1>
        <p className="App-info">
          My name is Michael Montagnese. Thank you for taking the time to 
          visit my website!
        </p>
    </header>
    </div>
  );
}

//About me section creation
function createAboutMeSection() {
  return(
    <div>
      <header className="about-header"> 
      <br/>
      About Me
      <header>ME</header>
      <p className="App-info">
        I am a computer engineer studying at Queen's University located
        in Kingston, ON. Technology has been an interest of mine for as
        long as I can remember. I started taking courses on it since it was
        first available in highschool!
      </p>
      <p className="App-info">
        
      </p>
      </header>
    </div>
  );
}

//Contact me section
function createContactMeSection(){
  return(
    <div>
      <header className="contact-header">
        <br/>
        Get in touch
        <p className="App-info">
          Need help with something? Do you have any questions for me? Let me know!
          <br/>
          <br/>
          Email me at: michael.n.montagnese@gmail.com
          <br/>
          <br/>
          <a
            className="link-content"
            href="https://www.github.com/mmont429"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="links" src="./GitHub-Mark-64px.png"/>
          </a>
          <br/>
          <a
            href="https://www.linkedin.com/in/michael-montagnese/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img className="links" src="/LI-In-Bug.png"/>
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
