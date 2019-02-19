import React, { Component } from "react";
import MenuItem from "../../../menu/MenuItem";

import "./sortby.scss";
import "../../../../app.scss";
import ButtonText from "../../../button/ButtonText";
import MenuIcon from "../../../menu/MenuIcon";

const MENU_ITEMS = ["Sample", "Person", "Array Platform"]

const SEARCH_TAGS = {
  "Sample" : "sample-name",
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
      let iconClassNames = "column no-flex row-center row-vert-center icon menu-item-icon";

      if (SEARCH_TAGS[item] === this.state.sortby) {
        items.push(<MenuItem name={item} onClick={this.clicked}>
          <MenuIcon name="check"/>
          <ButtonText>{item}</ButtonText>
        </MenuItem>);
      } else {
        items.push(<MenuItem name={item} onClick={this.clicked}>
          <MenuIcon/>
          <ButtonText>{item}</ButtonText>
        </MenuItem>);
      }
    });

    return items;
  }
}

export default SortByMenu;
