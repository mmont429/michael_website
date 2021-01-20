(this["webpackJsonpmichael-montagnese-website"]=this["webpackJsonpmichael-montagnese-website"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/IMGbackground.4e6cdd38.webp"},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),i=n.n(r),c=(n(17),n(11)),s=(n(18),n(1));n(19);var l=function(){return o.a.createElement("div",{className:"image-container"},o.a.createElement("img",{src:n(20),alt:"a cool pic of me",className:"coverPhoto"}))};var m=function(e,t,n){return o.a.createElement("div",null,o.a.createElement("a",{href:t},o.a.createElement("div",{className:"project-card-button",target:"_blank",rel:"noreferrer noopener"},e)))};n(21);var u=function(e,t){return o.a.createElement("div",null,o.a.createElement("a",{href:t,download:!0},o.a.createElement("div",{className:"project-card-button"},e)))},h=n(7);function d(){var e=Object(h.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    align-items: center;\n    color: ",";\n    background-color: ",";\n  }\n  h1{\n    color: ",";\n  }\n  .title {\n    color: ",";\n  }\n\n  // Button themes\n  .project-card-button {\n    border: 1px solid ",";\n    position: relative;\n    flex-wrap: wrap;\n    padding: 10px;\n    margin-right: 10px;\n    display: inline-block;\n    text-align: center;\n    transition: 0.5s;\n    color: ",";\n    background-color: ",";\n    &:hover {\n        color: ",";\n        background-color: ",";\n        box-shadow: inset 300px 0 1px 0 ",";\n    }\n  "]);return d=function(){return e},e}var p=Object(s.b)(d(),(function(e){return e.theme.body}),(function(e){return e.theme.background}),(function(e){return e.theme.header}),(function(e){return e.theme.header}),(function(e){return e.theme.body}),(function(e){return e.theme.body}),(function(e){return e.theme.background}),(function(e){return e.theme.background}),(function(e){return e.theme.body}),(function(e){return e.theme.body})),b={background:"#ece8e1",header:"#0c1a28",body:"#0f1923"},f={background:"#0f1923",header:"#ffe2b0",body:"#ece8e1"};var g=function(){var e="light";window.matchMedia("(prefers-color-scheme: dark)").matches&&(e="dark");var t=Object(a.useState)(e),n=Object(c.a)(t,2),r=n[0],i=(n[1],function(e,t){return o.a.createElement("div",{className:"banner-wrapper"},l(),o.a.createElement("div",{className:"padded-div"},o.a.createElement("header",{className:"title"},"Michael Montagnese"),o.a.createElement("div",{className:"flex-row"},m("LinkedIn","https://www.linkedin.com/in/michael-montagnese/",e),m("Github","https://github.com/mmont429",e),m("Email","mailto:michael.n.montagnese@gmail.com",e),u("Resume PDF","/resume/mmResume2020.pdf"))))}(r)),h=o.a.createElement("div",{className:"padded-div"},o.a.createElement("h1",{className:"h1"},"About Me"),o.a.createElement("p",null,"My name is Michael Montagnese. Thank you for taking the time to visit my website! I am a computer engineer studying at Queen's University located in Kingston, ON. Technology has been an interest of mine for as long as I can remember. I started taking courses on it since it was first available in high school!"),o.a.createElement("p",null,"In 2019-2020 I campaigned to represent Canada in the Summer 2020 Olympics for Mens 470. Unfortunatly with COVID-19 and school, my goals were put on hold. The picture above depicts my while training in Japan in the summer of 2019.")),d=o.a.createElement("div",{className:"padded-div"},o.a.createElement("h1",{className:"h1"},"Portfolio"),o.a.createElement("h2",null," Seet-Geek"),o.a.createElement("p",null,"Seet-Geek is a basic website that revolves around the sale of tickets to users. This is a project that was created for a quality assurance course that I took in my fourth year of school. It allows for someone to create the a user and by and sell tickets which are stored on a SQL database. There is an automatic testing functionality that is built into the program and can be run if wished."),o.a.createElement("p",null,"This website was created using agile methodology, specifically extreme programming (XP). The course itself taught the fundementals of starting from scratch, building, and testing a project. The final portion was to use docker and publish the webserver so anyone could run the code locally without downloading it."),o.a.createElement("p",null,"This project includes the use of HTML, CSS, Python, SQL, Docker."),m("Github Repository","https://github.com/mmont429/seet-geek"),o.a.createElement("h2",null," Ovarian Cancer App"),o.a.createElement("p",null,"This mobile app is being created for doctors. It takes in potential symptoms that patients have and inputs them into a machine learning algorithm. The algorithm will then determine what tests should be done for the patient."),o.a.createElement("p",null,"Our group is still on the progress of completing this mobile app, but the source code can be seen at the github link provided below. The frontend of the app is created with React Native, as well, additional libraries have been downloaded to incorperate certain features. The backend (machine learning) component was created on Jupyter Notebooks using python language. The hosting as well as the communication between the front and backends is done using different Amazon Web Services."),o.a.createElement("p",null,"This project includes the use of React Native (JavaScript), Amazon Web Service (AWS), and Jupyter Notebooks (Python)."),m("Github Repository","https://github.com/mmont429/OvarianCancerApp")),g=o.a.createElement("div",{className:"padded-div"},o.a.createElement("h1",{className:"h1"},"Resume"),o.a.createElement("p",null,"Want to know more about my experience and projects? Check out my resume below!"),u("Resume PDF","/resume/mmResume2020.pdf"),o.a.createElement("p",null,"Feel Free to contact me if you have any questions!"));return o.a.createElement("div",{className:"App"},o.a.createElement(s.a,{theme:"dark"===r?b:f},o.a.createElement(p,null),i,h,d,g))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.a5f2a6a1.chunk.js.map