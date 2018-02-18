import React, { Component } from 'react';
import Widget from './Components/Widget/Widget';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

class App extends Component {

  render() {
    const t = '0xf15301471933b5e9c7ff127b694b22341af7d62b6d4c715b2bf2115a29c6f233';
    const a = '0x0062d86ca27204fcd8D859E07741b1222291Bb9d';
    
    return (
      <MuiThemeProvider>
        <div>
          <Widget width={500} height={200} theme='dark' mainColor='#5cb85c' tx={t} address={a} />
          <FlatButton label="test" />
        </div>
      </MuiThemeProvider>
    );
  }

}

export default App;
