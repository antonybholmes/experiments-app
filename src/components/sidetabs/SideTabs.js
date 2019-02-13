import React, { Component } from "react";

import "./side-tabs.scss";
import SideTabsView from "./SideTabsView";
import SideTabsButton from "./SideTabsButton";

class SideTabs extends Component {
  constructor(props) {
    super(props);
    
    this.state = {tab : "Groups"}

    this.clicked = this.clicked.bind(this);
    this.changeTab = this.changeTab.bind(this);
  }

  clicked(e) {
    console.log(e.target.name);
    this.setState({tab : e.target.name});
  }

  changeTab(name) {
    this.setState({tab : name});
  }

  render() {
    return (
      <div className="column side-tabs">
        <SideTabsView tab={this.state.tab}>
          {this.props.children}
        </SideTabsView>
        <div className="column no-flex">
        {this.renderItems()}
        </div>
      </div>
    );
  }

  renderItems() {
		return React.Children.map(this.props.children, (item, i) => {
			return (
				<SideTabsButton key={item.props.name} name={item.props.name} onChangeTab={this.changeTab} />
			);	
    });
  }
}

export default SideTabs;
