import React, { Component } from 'react';
import Widget from './Components/Widget/Widget';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      percent:0,
      tx:undefined,
      address:undefined
    };
}
handleClick = () => {
  this.setState({loading:false})
}
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Widget width={300} height={200} theme='dark' loading={this.state.loading} percent={this.state.percent} tx={this.state.tx} address={this.state.address} />
          <TextField hintText="Enter Address" />
          <TextField hintText="Enter Tx" />
          <FlatButton label="test" onClick={this.handleClick} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
