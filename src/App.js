import React, { Component } from "react";
import "./app.css";
import Content from "./components/Content"
import Button from "./components/Button"
import RibbonButton from "./components/ribbon/RibbonButton"
import SearchPane from "./components/search/SearchPane"
import Groups from "./components/Groups"
import Ribbon from "./components/ribbon/Ribbon"
import RibbonTabs from "./components/ribbon/RibbonTabs"
import QuickAccessToolbar from "./components/ribbon/QuickAccessToolbar";
import QuickAccessButton from "./components/ribbon/QuickAccessButton";
import SideBar from "./components/Sidebar";
import RibbonMenu from "./components/ribbon/ribbonmenu/RibbonMenu";
import RibbonContent from "./components/ribbon/RibbonContent";

class App extends Component {
  clicked() {
    console.log('test');
  }

  render() {
    return (
      <div className={"app"}>
        <RibbonMenu/>
        <Ribbon>
          <RibbonTabs>
            <QuickAccessToolbar>
              <QuickAccessButton></QuickAccessButton>
            </QuickAccessToolbar>
          </RibbonTabs>
          <RibbonContent/>
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
