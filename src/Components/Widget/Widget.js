import React, { Component } from 'react';
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
                    <CircularProgress style={{marginLeft:10}} />
                    <h1>Progress Indicator</h1>
                </ToolbarGroup>
                <ToolbarGroup>
                <ToolbarTitle text="Options" />
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