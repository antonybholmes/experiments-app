import React, { Component } from "react";
import "./app.scss";
import "./components/button/button.scss";

import Content from "./components/content/Content"
import StatusBar from "./components/statusbar/StatusBar"
import RibbonButton from "./components/ribbon/ribbonbutton/RibbonButton"
import Icon from "./components/Icon"
import ButtonIcon from "./components/ButtonIcon"
import SearchPane from "./components/search/SearchPane"
import Groups from "./components/groups/Groups"
import Ribbon from "./components/ribbon/Ribbon"
import RibbonBar from "./components/ribbon/RibbonBar"
import QuickAccessToolbar from "./components/ribbon/quickaccess/QuickAccessToolbar";
import QuickAccessButton from "./components/ribbon/quickaccess/QuickAccessButton";
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
import TitleBar from "./components/ribbon/titlebar/TitleBar";
import CartPanel from "./components/cart/CartPanel";
import CartButton from "./components/cart/CartButton";

const KEY = Constants.KEY;
const URL = `http://52.206.83.98/edbw/api/v1/samples/search?&key=${KEY}&totp=031082`;

const TAG_URL = `http://52.206.83.98/edbw/api/v1/samples/tags?&key=${KEY}&totp=031082&sample=`;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toolbar: "Home",
      query: "BCL6",
      samples: {},
      showMenu: false,
      sortby: "microarray-labeled-extract-array-platform",
      showCart : false,
      sortAsc: true
    };

    this.clicked = this.clicked.bind(this);
    this.fileClicked = this.fileClicked.bind(this);
    this.menuClose = this.menuClose.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.searched = this.searched.bind(this);
    this.search = this.search.bind(this);
    this.sortChanged = this.sortChanged.bind(this);
    this.showCartClicked = this.showCartClicked.bind(this);
    this.cartClosed = this.cartClosed.bind(this);
  }

  clicked(e) {
    console.log('file clicked');
  }

  showCartClicked(e) {
    console.log('cart clicked ' + this.state.showCart);

    this.setState({showCart : !this.state.showCart});
  }

  cartClosed(e) {
    this.setState({showCart : false});
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

    console.log('blob ' + url);

    axios.get(url, { headers: { "Access-Control-Allow-Origin": "*" } })
      .then(res => {
        let data = res.data;

        if ("data" in data) {
          data = data.data;
          this.sortBySamples(data);
        } else {
          // Sort samples
          this.sortSamples(data);

        }
      })
  }

  sortSamples(samples) {
    var sampleMap = {};

    sampleMap["Sample"] = [];

    samples.forEach((sample, gi) => {
      sampleMap["Sample"].push(sample);
    });

    this.setState({ sample: null, samples: sampleMap });
  }

  sortBySamples(data) {
    var sampleMap = {};

    let keys = Object.keys(data); //.sort()

    //if (!this.state.sortAsc) {
    //  keys = keys.reverse()
    //}

    let keyMap = {};

    keys.forEach((key, gi) => {
      let name = key.split(" ").reverse().join(", ");

      keyMap[name] = key;
    });

    Object.keys(keyMap).sort().forEach((name, gi) => {
      sampleMap[name] = [];

      console.log(name);

      data[keyMap[name]].forEach((sample, si) => {
        sampleMap[name].push(sample);
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
          <TitleBar />
          <RibbonBar>

            <FileTab onClick={this.fileClicked} />



            <RibbonTabs onChangeTab={this.changeTab} />

            <QuickAccessToolbar>
              <SearchBar query={this.state.query} onSearch={this.searched} />

              <CartButton onClick={this.showCartClicked} />
            </QuickAccessToolbar>

          </RibbonBar>
          <RibbonContent tab={this.state.toolbar}>
            <RibbonToolbar key="home" name="Home">
              <RibbonToolbarSection name="Microarray">
                <RibbonButton name="MAS5" onClick={this.clicked}>MAS5</RibbonButton>
              </RibbonToolbarSection>

              <RibbonToolbarSection name="RNA-seq">
                <RibbonButton name="RNA-seq" onClick={this.clicked}>RNA-seq</RibbonButton>
              </RibbonToolbarSection>

              <RibbonToolbarSection name="Cart">
                <RibbonButton onClick={this.clicked}>
                  <ButtonIcon name="fa-plus" />
                  Add To Cart
                </RibbonButton>
              </RibbonToolbarSection>

            </RibbonToolbar>
            <RibbonToolbar key="other" name="Other">
              <div>Other</div>
            </RibbonToolbar>
          </RibbonContent>
        </Ribbon>
        <Content>
          <CartPanel show={this.state.showCart} onClose={this.cartClosed}></CartPanel>
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
        <StatusBar />
      </div>
    );
  }
}

export default App;
