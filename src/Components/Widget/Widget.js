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
            <div className="container" style={{width:this.state.styles.width, height:this.state.styles.height, background:this.state.styles.background}}>
                <Checkmark color={this.state.styles.mainColor} loading={this.props.loading} />
                <h1 className={this.props.loading ? 'animate-flicker' : ''} 
                    style={{color:this.state.styles.mainColor}}>{this.props.loading ? 'Processing' : 'Completed'}</h1>
            </div>
        );
    }
}

export default Widget;