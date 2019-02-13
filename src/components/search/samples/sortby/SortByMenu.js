import React, { Component } from "react";
import MenuItem from "../../../menuitem/MenuItem";

import "./sortby.scss";
import "../../../../app.scss";
import ButtonText from "../../../button/ButtonText";

const MENU_ITEMS = ["Sample", "Person", "Array Platform"]

const SEARCH_TAGS = {
  "Sample" : "sample",
  "Person" : "sample-person",
  "Array Platform" : "microarray-labeled-extract-array-platform",
};

class SortByMenu extends Component {
  constructor(props) {
    super(props);
    
    this.state = {sortby : this.props.sortby}

    this.clicked = this.clicked.bind(this);
  }

  clicked(e, name) {
    this.setState({sortby : SEARCH_TAGS[name]})

    console.log('sort ' + SEARCH_TAGS[name]);

    this.props.onClick(e, name, SEARCH_TAGS[name]);
  }

  render() {
    return (
      <div key="sortby-menu" id="sortby-menu" className={this.props.dropDownClassNames}>
        {this.renderMenuItems()}
      </div>
    );
  }

  renderMenuItems() {
    let items = []

    console.log('s ' + this.state.sortby);

    MENU_ITEMS.forEach( (item) => {
      let iconClassNames = "column no-flex row-center row-vert-center button-icon";

      if (SEARCH_TAGS[item] === this.state.sortby) {
        iconClassNames += " fas fa-check";
      }

      items.push(<MenuItem name={item} onClick={this.clicked}>
        <div className={iconClassNames} />
        <ButtonText>{item}</ButtonText>
      </MenuItem>);
    });

    return items;
  }
}

export default SortByMenu;
