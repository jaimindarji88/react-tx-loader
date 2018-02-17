import React, { Component } from 'react';
import './Checkmark.css';

class Checkmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completeClass:"",
        };
    }
    render() {
        switch (this.props.loading) {
            case true:
            return (
                <div className={"circle-loader"}>
                    <div className="checkmark draw"></div>
                </div>
            );
            case false:
            return (
                <div className={"circle-loader load-complete"}>
                    <div style={{display:'block'}} className="checkmark draw"></div>
                </div>
            );
        }
    }
}

export default Checkmark;