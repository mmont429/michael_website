import React, { useState } from "react";
import "./App.scss";
import { ThemeProvider } from "styled-components";
import CoverPicture from "./components/coverPicture/coverPicture";
import Button from "./components/button/button";
import DownloadButton from "./components/button/downloadButton";
import { GlobalStyles } from "./resources/theme/global";
import { lightTheme, darkTheme } from "./resources/theme/theme";
//import ThemeToggleIcon from "./resources/icons/themeToggleIcon";
//import Navbar from "./components/navbar/navbar";

function App() {
  var userPreferredTheme = "light";

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    userPreferredTheme = "dark";
  }

  const [theme, setTheme] = useState(userPreferredTheme);

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  const bannerSection = createBannerSection(theme, toggleTheme);
  const aboutMeSection = createAboutMe();
  const myProjectsSection = createMyProjectsSection(theme);
  const myResumeSection = createResumeSection();
  /*return (
    <div className="App">
      <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
        <Navbar />
        <>
          <GlobalStyles />
          <section id="welcome">
            {bannerSection}
          </section>

          <section id="about">
          {aboutMeSection}
          </section>

          <section id="contact">
            {myProjectsSection}
          </section>

          {myResumeSection}
        </>
      </ThemeProvider>
    </div>
  );
}*/
return(
  <div className="App">
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      <GlobalStyles />
        {bannerSection}
        {aboutMeSection}
        {myProjectsSection}
        {myResumeSection}
    </ThemeProvider>
  </div>
);
}

function createBannerSection(theme, toggleTheme) {
  //const toggle = ThemeToggleIcon(theme);
  return (
    <div className="banner-wrapper">
      {CoverPicture()}
      {/* <div className="theme-toggle" onClick={toggleTheme}>
        {toggle}
      </div> */}
      <div className="padded-div">
        <header className="title">
          Michael Montagnese
        </header>
        <div className="flex-row">
          {Button(
            "LinkedIn",
            "https://www.linkedin.com/in/michael-montagnese/",
            theme
          )}
          {Button("Github", "https://github.com/mmont429", theme)}
          {Button("Email", "mailto:michael.n.montagnese@gmail.com", theme)}
          {DownloadButton(
            "Resume PDF",
            process.env.PUBLIC_URL + "/resume/mmResume2020.pdf"
          )}
        </div>
      </div>
    </div>
  );
}

function createAboutMe() {
  return (
    <div className="padded-div">
      <h1 className="h1">About Me</h1>
      <p>
        My name is Michael Montagnese. Thank you for taking the time to 
        visit my website! I am a computer engineer studying at Queen's University located
        in Kingston, ON. Technology has been an interest of mine for as
        long as I can remember. I started taking courses on it since it was
        first available in high school.
      </p>
      <p>
        In 2019-2020 I campaigned to represent Canada in the Summer 2020 Olympics for Mens
        470. Unfortunatly with COVID-19 and school, my goals were put on hold. The picture
        above depicts my while training in Japan in the summer of 2019. 
      </p>
    </div>
  );
}

function createMyProjectsSection() {
  return (
    <div className="padded-div">
      <h1 className="h1">Portfolio</h1>
      <h2> Seet-Geek</h2>
      <p>
        Seet-Geek is a basic website that revolves around the sale of tickets to users.
        This is a project that was created for a quality assurance course that I took in
        my fourth year of school. It allows for someone to create the a user and by and sell
        tickets which are stored on a SQL database. There is an automatic testing functionality
        that is built into the program and can be run if wished. 
      </p>
      <p>
        This website was created using agile methodology, specifically extreme programming (XP).
        The course itself taught the fundementals of starting from scratch, 
        building, and testing a project. The final portion was to use docker and publish
        the webserver so anyone could run the code locally without downloading it. 
      </p>
      <p>
        This project includes the use of HTML, CSS, Python, SQL, Docker. 
      </p>
      {Button("Github Repository", "https://github.com/mmont429/seet-geek")}
      <h2> Ovarian Cancer App</h2>
      <p>
        This mobile app is being created for doctors. It takes in potential symptoms
        that patients have and inputs them into a machine learning algorithm. The 
        algorithm will then determine what tests should be done for the patient.
      </p>
      <p>
        Our group is still on the progress of completing this mobile app, but the source
        code can be seen at the github link provided below. The frontend of the app is 
        created with React Native, as well, additional libraries have been downloaded 
        to incorperate certain features. The backend (machine learning) component was 
        created on Jupyter Notebooks using python language. The hosting as well as the 
        communication between the front and backends is done using different Amazon Web
        Services. 
      </p>
      <p>
        This project includes the use of React Native (JavaScript), Amazon Web Service (AWS),
         and Jupyter Notebooks (Python).
      </p>
      {Button("Github Repository", "https://github.com/mmont429/OvarianCancerApp")}
    </div>
  );
}

function createResumeSection() {
  return (
    <div className="padded-div">
      <h1 className="h1">Resume</h1>
      <p>
        Want to know more about my experience and projects? Check out my resume below!
      </p>
      {DownloadButton(
        "Resume PDF",
        process.env.PUBLIC_URL + "/resume/mmResume2020.pdf"
      )}
      <p>
        Feel Free to contact me if you have any questions!
      </p>
    </div>
  );
}
export default App;
