import { Component } from "react";
import "./button.scss";

class Button extends Component {
  constructor(props) {
    super(props);
    
    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    this.props.onClick(e);
  }

  
}

export default Button;
