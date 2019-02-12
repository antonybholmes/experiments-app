import React, { Component } from "react";
import "./app.scss";
import Content from "./components/content/Content"
import Button from "./components/button/Button"
import RibbonButton from "./components/ribbon/ribbonbutton/RibbonButton"
import SearchPane from "./components/search/SearchPane"
import Groups from "./components/groups/Groups"
import Ribbon from "./components/ribbon/Ribbon"
import RibbonBar from "./components/ribbon/RibbonBar"
import QuickAccessToolbar from "./components/ribbon/QuickAccessToolbar";
import QuickAccessButton from "./components/ribbon/QuickAccessButton";
import SideBar from "./components/sidebar/Sidebar";
import RibbonMenu from "./components/ribbon/ribbonmenu/RibbonMenu";
import RibbonContent from "./components/ribbon/ribboncontent/RibbonContent";
import RibbonTabs from "./components/ribbon/RibbonTabs";
import RibbonTab from "./components/ribbon/ribbontab/RibbonTab";
import RibbonToolbar from "./components/ribbon/ribbontoolbar/RibbonToolbar";
import RibbonToolbarSection from "./components/ribbon/ribbontoolbar/RibbonToolbarSection";
import SideTabs from "./components/sidetabs/SideTabs";
import Card from "./components/card/Card";
import SearchBar from "./components/searchbar/SearchBar";
import FileTab from "./components/ribbon/filetab/FileTab";
import Constants from "./Constants";
import axios from "axios";
import CenterPanel from "./components/centerpanel/CenterPanel";

const KEY = Constants.KEY;
const URL = `http://52.206.83.98/edbw/api/v1/samples/search?&key=${KEY}&totp=031082`;

const TAG_URL = `http://52.206.83.98/edbw/api/v1/samples/tags?&key=${KEY}&totp=031082&sample=`;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { toolbar: "Home", query: "BCL6", samples: {}, showMenu: false, sortby: "microarray-labeled-extract-array-platform", sortAsc: true };

    this.fileClicked = this.fileClicked.bind(this);
    this.menuClose = this.menuClose.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.searched = this.searched.bind(this);
    this.search = this.search.bind(this);
    this.sortChanged = this.sortChanged.bind(this);
  }

  fileClicked(e) {
    this.setState({ showMenu: true });
    console.log('file clicked');
  }

  menuClose(e) {
    this.setState({ showMenu: false });
  }

  changeTab(name) {
    this.setState({ toolbar: name });
  }

  sortChanged(name) {
    console.log('sort ' + name);

    this.setState({ sortby: name }, () => {
      this.search();
    }); 
  }

  /**
   * Handler for triggering a search when the query changes.
   * 
   * @param q   The search query.
   */
  searched(q) {
    this.setState({ query: q });

    this.search();
  }

  /**
   * Searches for samples matching the current query
   */
  search() {
    let q = this.state.query;

    console.log("searching" + q);

    let url = `${URL}&q=${q}`;

    if (this.state.sortby !== "sample") {
      url = `${url}&sortby=${this.state.sortby}`;
    }

    console.log(url);

    axios.get(url, { headers: { "Access-Control-Allow-Origin": "*" } })
      .then(res => {
        const data = res.data.data;
        this.sortSamples(data);
      })
  }

  sortSamples(data) {
    var sampleMap = {};

    var t = "";

    console.log(data.length);

    let keys = Object.keys(data).sort()

    //if (!this.state.sortAsc) {
    keys = keys.reverse()
    //}

    keys.forEach((group, gi) => {
      sampleMap[group] = [];

      console.log(group);

      data[group].forEach((sample, si) => {
        sampleMap[group].push(sample);
      });
    });

    this.setState({ sample: null, samples: sampleMap });
  }

  componentDidMount() {
    this.search(this.state.query);
  }

  render() {
    return (
      <div className="column app">
        <RibbonMenu show={this.state.showMenu} onClose={this.menuClose} />
        <Ribbon>
          <RibbonBar>
            <QuickAccessToolbar>
              <FileTab onClick={this.fileClicked} />
            </QuickAccessToolbar>


            <RibbonTabs onChangeTab={this.changeTab} />

            <div className="row row-vert-center align-right">
              <SearchBar query={this.state.query} onSearch={this.searched} />
            </div>

          </RibbonBar>
          <RibbonContent tab={this.state.toolbar}>
            <RibbonToolbar key="home" name="Home">
              <RibbonToolbarSection name="Microarray">
                <RibbonButton name="MAS5" />
              </RibbonToolbarSection>

              <RibbonToolbarSection name="RNA-seq">
                <RibbonButton name="RNA-seq" />
              </RibbonToolbarSection>

            </RibbonToolbar>
            <RibbonToolbar key="other" name="Other">
              <div>Other</div>
            </RibbonToolbar>
          </RibbonContent>
        </Ribbon>
        <Content>
          <SideBar>
            <SideTabs>
              <Groups name="Groups" onClick={this.clicked} />
            </SideTabs>

          </SideBar>
          <CenterPanel>
            {/* <Card> */}
            <SearchPane
              sortby={this.state.sortby}
              sample={this.state.sample}
              samples={this.state.samples}
              onSortChanged={this.sortChanged}
              />
            {/* </Card> */}
          </CenterPanel>
        </Content>
      </div>
    );
  }
}

export default App;
