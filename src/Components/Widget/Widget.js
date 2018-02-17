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
        this.state = {
          value: 3,
        };
    }
    
    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    {this.props.loading ? 
                        <Checkmark /> :
                        <Checkmark />
                    }
                    <h1>Progress Indicator</h1>
                </ToolbarGroup>
                <ToolbarGroup>
                <ToolbarTitle style={{fontSize:14}} className="txHash" text="0x1f1e365ebab5181ddfbc8f98333deb3f849e90ad060a5187a744de432c7b4adf" />
                <FontIcon className="muidocs-icon-custom-sort" />
                <ToolbarSeparator />
                <IconMenu
                    iconButtonElement={
                    <IconButton touch={true}>
                        <NavigationExpandMoreIcon />
                    </IconButton>
                    }
                >
                    <MenuItem primaryText="Download" />
                    <MenuItem primaryText="More Info" />
                </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default Widget;