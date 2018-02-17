import React, { Component } from 'react';
import Widget from './Components/Widget/Widget';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      percent:0,
      tx:undefined
    };
}
handleClick = () => {
  this.setState({loading:false})
}
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Widget loading={this.state.loading} percent={this.state.percent} tx={this.state.tx} />
          <FlatButton label="test" onClick={this.handleClick} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
