import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Column from './Column';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Column title="ToDo"/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Column title="In Progress"/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Column title="Done"/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
