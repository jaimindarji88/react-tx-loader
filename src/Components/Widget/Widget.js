import React, { Component } from 'react';
import Checkmark from '../Checkmark/Checkmark';
import './Widget.css';

const URL = 'wss://socket.etherscan.io/wshandler';

class Widget extends Component {
    constructor(props) {
        super(props);
        let background = '';
        let textColor = '';
        if (this.props.theme === 'light'){
            background = '#fff';
            textColor = '#000';
        } 
        else if (this.props.theme === 'dark'){
            background = '#303030';
            textColor = '#fff';
        }
        this.state = {
          styles:{
            width:props.width,
            height:props.height,
            background:background,
            mainColor:props.mainColor
          },
          error: false,
          subscribed: false,
          loading: true
        };

        this.ws = new WebSocket(URL);
        this.ws.onmessage = this.onmessage;
        this.ws.onerror = this.onerror;
        this.ws.onopen = this.onopen;
    }

    onopen = () => {
      this.ping = setInterval(() => {
        this.ws.send(JSON.stringify({event: 'ping'}));
      }, 19000);

      this.ws.send(JSON.stringify({
        event: 'txlist',
        address: this.props.address
      }));
    }

    onerror = (evt) => {
      console.log('error', evt)
      this.setState({
        error: true
      })
    }

    onmessage = ({ data }) => {
      data = JSON.parse(data);

      if (data.event === 'welcome' || data.event === 'pong') return;
      
      if (data.result) {
        for (const tx of data.result) {
          if (tx.hash === this.props.tx) {
            this.setState({
              loading: false
            });
          }
        }

      }


    }

    render() {
        return (
            <div style={{width:this.state.styles.width, height:this.state.styles.height}}>
            <a 
            target="_blank"
            href={"https://etherscan.io/tx/" + this.props.tx}>
                <div className="container" style={{width:this.state.styles.width, height:this.state.styles.height, background:this.state.styles.background}}>
                    <Checkmark loading={this.state.loading} />
                    <h1 className={this.state.loading ? 'status animate-flicker' : 'status'}>{this.state.loading ? 'Processing' : 'Completed'}
                    </h1>
                </div>
            </a>
            </div>
        );
    }
}

export default Widget;