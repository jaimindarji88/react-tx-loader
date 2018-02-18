import React, { Component } from 'react';
import Widget from './Components/Widget/Widget';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

class App extends Component {
  render() {
    
    return (
      <MuiThemeProvider>
        <div>
          <FlatButton label="test" />
        </div>
      </MuiThemeProvider>
    );
  }

}

export {App};
export default Widget;
