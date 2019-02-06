import React, { Component } from "react";
import "./app.css";
import Content from "./components/Content"
import Button from "./components/Button"
import RibbonButton from "./components/ribbon/RibbonButton"
import SearchPane from "./components/search/SearchPane"
import Groups from "./components/Groups"
import Ribbon from "./components/ribbon/Ribbon"
import RibbonBar from "./components/ribbon/RibbonBar"
import QuickAccessToolbar from "./components/ribbon/QuickAccessToolbar";
import QuickAccessButton from "./components/ribbon/QuickAccessButton";
import SideBar from "./components/sidebar/Sidebar";
import RibbonMenu from "./components/ribbon/ribbonmenu/RibbonMenu";
import RibbonContent from "./components/ribbon/ribboncontent/RibbonContent";
import RibbonTabs from "./components/ribbon/RibbonTabs";
import RibbonTab from "./components/ribbon/ribbontab/RibbonTab";
import RibbonToolbar from "./components/ribbon/ribboncontent/ribbontoolbar/RibbonToolbar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { toolbar: "Home" };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(name) {
    this.setState({ toolbar: name });
  }

  render() {
    return (
      <div className={"app"}>
        <RibbonMenu />
        <Ribbon>
          <RibbonBar onChangeTab={this.changeTab} />
          <RibbonContent toolbar={this.state.toolbar}>
            <RibbonToolbar name="Home">
              <div>Test</div>
              <div>Test2</div>
            </RibbonToolbar>
            <RibbonToolbar name="Other">
              <div>Other</div>
            </RibbonToolbar>
          </RibbonContent>
        </Ribbon>
        <Content>
          <SideBar>
            <Groups onClick={this.clicked} />
          </SideBar>
          <SearchPane query="bcl6" />
        </Content>
      </div>
    );
  }
}

export default App;
