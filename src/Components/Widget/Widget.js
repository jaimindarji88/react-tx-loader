import React, { Component } from 'react';
import Checkmark from '../Checkmark/Checkmark';
import './Widget.css';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import CircularProgress from 'material-ui/CircularProgress';

class Widget extends Component {
    constructor(props) {
        super(props);
        let background = '';
        let textColor = '';
        if(this.props.theme == 'light'){
            background = '#fff';
            textColor = '#000';
        } 
        else if(this.props.theme == 'dark'){
            background = '#303030';
            textColor = '#fff';
        }
        this.state = {
          styles:{
            width:props.width,
            height:props.height,
            background:background,
            mainColor:props.mainColor
          }
        };
    }

    render() {
        return (
            <div style={{width:this.state.styles.width, height:this.state.styles.height}}>
            <a 
            target="_blank"
            href="https://etherscan.io/tx/0x1f1e365ebab5181ddfbc8f98333deb3f849e90ad060a5187a744de432c7b4adf">
                <div className="container" style={{width:this.state.styles.width, height:this.state.styles.height, background:this.state.styles.background}}>
                    <Checkmark loading={this.props.loading} />
                    <h1 className={this.props.loading ? 'status animate-flicker' : 'status'}>{this.props.loading ? 'Processing' : 'Completed'}
                    </h1>
                </div>
            </a>
            </div>
        );
    }
}

export default Widget;