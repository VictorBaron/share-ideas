import React, { Component } from 'react';
import { ProjectContainer } from "../containers/ProjectContainer"

class App extends Component {
  render() {
    return (
      <div>
          <h1>Dashboard</h1>
          <ProjectContainer/>
      </div>
    );
  }
}

export default App;
