import React, { Component } from "react";
import ReactDOM from "react-dom";
import MenuItem from "../../../menuitem/MenuItem";

import "./sortby.scss";
import "../../../../app.scss";
import ButtonText from "../../../button/ButtonText";
import SortByMenu from "./SortByMenu";

class SortBy extends Component {
  constructor(props) {
    super(props);
    this.state = { sortby: this.props.sortby, dropDownClassNames: "dropdown-content dropdown-content-hidden" };
    this.clicked = this.clicked.bind(this);
    this.outsideClicked = this.outsideClicked.bind(this);
    this.menuClicked = this.menuClicked.bind(this);
  }

  clicked(e) {
    this.setState({ dropDownClassNames: "dropdown-content dropdown-content-show" });
  }

  menuClicked(e, name, altName) {
    console.log('sortby ' + altName);

    this.setState({ sortby: altName });

    this.props.onSortChanged(altName);

    this.setState({ dropDownClassNames: "dropdown-content dropdown-content-hide" });
  }

  componentDidMount() {
    document.addEventListener('click', this.outsideClicked, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.outsideClicked, true);
  }

  outsideClicked(e) {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(e.target)) {
      this.setState({ dropDownClassNames: "dropdown-content dropdown-content-hide" });
    }
  }

  render() {
    console.log(this.state.classNames);

    return (
      <div className="sortby-drop-down">
        <div onClick={this.clicked} className="sortby-drop-down-button">Sort by
          <div className="sortby-icon fas fa-xs fa-chevron-down" />
        </div>
        <SortByMenu sortby={this.state.sortby} onClick={this.menuClicked} dropDownClassNames={this.state.dropDownClassNames} />
      </div>
    );
  }
}

export default SortBy;
