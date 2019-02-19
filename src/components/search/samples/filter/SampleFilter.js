import React, { Component } from "react";
import ReactDOM from "react-dom";
import MenuItem from "../../../menu/MenuItem";

import "./sample-filter.scss";
import "../../../../app.scss";

class SampleFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {classNames : "dropdown-content dropdown-content-hidden"};
    this.clicked = this.clicked.bind(this);
    this.outsideClicked = this.outsideClicked.bind(this);
    this.menuClicked = this.menuClicked.bind(this);
  }

  clicked(e) {
    this.setState({classNames : "dropdown-content dropdown-content-show"});
  }

  menuClicked(e) {
    console.log('sdsd')
    this.outsideClicked(e);
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
        this.setState({classNames : "dropdown-content dropdown-content-hide"});
      }
  }

  render() {
    console.log(this.state.classNames);

    return (
      <div className="col no-flex">
      <div className="filter-drop-down">
        <div onClick={this.clicked} className="filter-drop-down-button">Filter
          <div className="filter-icon fas fa-xs fa-chevron-down" />
        </div>
        <div key="filter-menu" id="filter-menu" className={this.state.classNames}>
          <MenuItem onClick={this.menuClicked}>Person</MenuItem>
          <MenuItem onClick={this.menuClicked}>Link 2</MenuItem>
          <MenuItem onClick={this.menuClicked}>Link 3</MenuItem>
        </div>
      </div>
      </div>
    );
  }
}

export default SampleFilter;
