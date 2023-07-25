import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!!!!</h1>;
}

// How to render in React v18
// if you go to the folder 'public' and then open
// index.html, there will be <div> in there with the
// the id of "root". We need to put that id in here
// so App() is rendered to display on webpage

// Strict mode during development it will render
// components twice and check for bugs
// react will also check for outdated parts of
// React API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// if you want to start application, use the command:
//      npm start
// to find the file with all the npm commands, locate
// the package.json file in the project
// it will be under scripts
