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
import OKCancelDialog from "./components/dialog/OKCancelDialog";
import RibbonMenuItem from "./components/ribbon/ribbonmenu/RibbonMenuItem";
import RibbonMenuSep from "./components/ribbon/ribbonmenu/RibbonMenuSep";
import VSpace from "./components/VSpace";

const { remote } = window.require('electron');


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
      sampleList: [],
      selectedSamples: [],
      cartSamples: new Map(),
      page: 1,
      showMenu: false,
      sortby: "microarray-labeled-extract-array-platform",
      showCart: false,
      showDialog: false,
      dialogMessage: "",
      dialogCallBack: null,
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
    this.hideCart = this.hideCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this._clearCart = this._clearCart.bind(this);
    this.selectionChanged = this.selectionChanged.bind(this);
    this.dialogStatus = this.dialogStatus.bind(this);
  }

  clicked(e, cmd) {
    console.log('button clicked ' + cmd);

    switch (cmd) {
      case "add-to-cart":
        this.addToCart();
        break;
      case "exit":
        remote.getCurrentWindow().close();
        break;
      default:
        break;
    }
  }

  dialogStatus(status) {
    this.setState({showDialog : false});

    console.log('what now ' + status);

    if (status === "ok") {
      console.log('what now  2' + status);

      if (this.state.dialogCallBack !== null) {
        this.state.dialogCallBack();
      }
    }
  }

  /**
   * Add samples to the cart
   */
  addToCart() {
    let samples = new Map(this.state.cartSamples);
    
    this.state.selectedSamples.forEach((index, i) => {
      console.log('add to cart ' + this.state.sampleList[index].n + ' ' + index);

      samples.set(this.state.sampleList[index].n, this.state.sampleList[index].id);
    });

    this.setState({cartSamples : samples})
  }

  removeFromCart(name) {
    let samples = new Map(this.state.cartSamples);
    
    samples.delete(name);

    this.setState({cartSamples : samples})
  }

  clearCart() {
    this.setState({dialogMessage : "Are you sure you want to clear the cart?", 
      dialogCallBack : this._clearCart,
      showDialog : true});
  }

  _clearCart() {
    this.setState({cartSamples : new Map()})
  }

  selectionChanged(e, samples) {
    this.setState({ selectedSamples: samples });
  }

  cartChanged(samples) {
    this.setState({ cartSamples: samples });
  }

  showCartClicked(e) {
    console.log('cart clicked ' + this.state.showCart);

    this.setState({ showCart: !this.state.showCart });
  }

  hideCart(e) {
    this.setState({ showCart: false });
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
    this.setState({ query: q }, () => {
      this.search();
    });
  }

  /**
   * Searches for samples matching the current query
   */
  search() {
    this.setState({ sampleList: [], selectedSamples: [], cartStagedSamples: new Map(), cartSamples: [] });

    let q = this.state.query;

    console.log("searching" + q);

    let url = `${URL}&q=${q}&page=${this.state.page}`;

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

    this.setState({ sample: null, samples: sampleMap, sampleList: sampleMap["Sample"] });
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

    let samples = []

    Object.keys(keyMap).sort().forEach((name, gi) => {
      sampleMap[name] = [];

      console.log(name);

      data[keyMap[name]].forEach((sample, si) => {
        sampleMap[name].push(sample);
        samples.push(sample);
      });
    });

    this.setState({ sample: null, samples: sampleMap, sampleList: samples });
  }

  componentDidMount() {
    this.search(this.state.query);
  }

  render() {
    return (
      <div className="column app">
        <OKCancelDialog 
        show={this.state.showDialog}
        message={this.state.dialogMessage} 
        onStatus={this.dialogStatus} />

        <CartPanel
          show={this.state.showCart}
          samples={this.state.cartSamples}
          onHide={this.hideCart}
          onRemoveFromCart={this.removeFromCart}
          onClearCart={this.clearCart} />

        <RibbonMenu show={this.state.showMenu} onClose={this.menuClose}>
          <RibbonMenuItem cmd="exit" onClick={this.clicked}>Close</RibbonMenuItem>
          <VSpace size="1rem"/>
          <RibbonMenuSep/>
          <VSpace size="1rem"/>
          <RibbonMenuItem cmd="about" onClick={this.clicked}>About</RibbonMenuItem>
        </RibbonMenu>
        
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
                <RibbonButton cmd="add-to-cart" onClick={this.clicked}>
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
              onSelectionChanged={this.selectionChanged}
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
