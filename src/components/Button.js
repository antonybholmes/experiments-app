import React, { Component } from "react";
import "../css/button.css";

class Button extends Component {
    render() {
        return (
            <div className="button">
                <p className="button-content">{this.props.name}</p>
            </div>
        );
    }
}

export default Button;
