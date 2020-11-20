import './App.css';
import React from "react";

function App() {
  const AboutMeSection = createAboutMeSection();
  return (
    <div className="App">
      <header className="App-header">
        <title>Hi, I'm Michael</title>
        <h1 className="App-title">Hi, I'm Michael</h1>
        <p className="App-info">
          My name is Michael Montagnese. Thank you for taking the time to 
          visit my website!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/michael-montagnese/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Checkout my linkedin
        </a>
        <a href="#about">About Me</a>
        
        
      </header>

      {/* Calling About me section*/}
      <section id="about">
        {AboutMeSection}
      </section>
    </div>
  );
}

//About me section creation
function createAboutMeSection() {
  return(
    <div>
      <header className="App-header"> About Me
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

export default App;
