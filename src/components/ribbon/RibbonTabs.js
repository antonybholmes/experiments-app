import React, { Component } from "react";
import "./ribbon.scss";
import "../../app.scss";
import RibbonTab from "./ribbontab/RibbonTab"


class RibbonTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {currentTab : "Home"};

    this.clicked = this.clicked.bind(this);
    this.changeTab = this.changeTab.bind(this);
  }

  clicked(e) {
    // Do nothing
  }

  changeTab(name) {
    this.setState({currentTab : name});
    this.props.onChangeTab(name);
  }

  render() {
    return (
      <div className="row no-flex ribbon-tabs">
        <RibbonTab name="Home" currentTab={this.state.currentTab} onClick={this.clicked} onChangeTab={this.changeTab} />
        <RibbonTab name="Other" currentTab={this.state.currentTab} onClick={this.clicked} onChangeTab={this.changeTab} />
      </div>
    );
  }
}

export default RibbonTabs;
