import React, { Component } from "react";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          {`const myApp = {
            projectName : 'Portfolio',
            author: 'Andrew Alvarez',
            geo: {
                  local : 'Toronto, ON. Canada',
                  origin : 'Caracas, Venezuela'
                },
            tech: [ React, ES6, CSS3, HTML5, emotion.js, Bootstrap,   ]
            softSkills: [ Command_Line, Git, OOP ]
          }`}
        </h1>
      </div>
    );
  }
}

export default App;
