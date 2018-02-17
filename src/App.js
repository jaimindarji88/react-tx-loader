import React, { Component } from 'react';
import Widget from './Components/Widget/Widget';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
    };
}
  render() {
    return (
      <MuiThemeProvider>
        <Widget loading={this.state.loading} />
      </MuiThemeProvider>
    );
  }
}

export default App;
