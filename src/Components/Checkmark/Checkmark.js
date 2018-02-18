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
      console.log('loading',this.props.loading);
        switch (this.props.loading) {
            case true:
            return (
                <div className={"circle-loader"}>
                    <div className="checkmark draw"></div>
                </div>
            );
            case false:
            return (
                <div className={this.props.error ? "circle-loader load-failed" : "circle-loader load-complete"}>
                    <div style={{display:'block'}} className={this.props.error ? "checkmark" : "checkmark draw"}></div>
                </div>
            );
        }
    }
}

export default Checkmark;