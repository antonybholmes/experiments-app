import React, { Component } from "react";
import "../css/groups.css";
import axios from "axios";
import Group from "./Group"
import Constants from '../Constants'
import Switch from "./switch/Switch";

const KEY = Constants.KEY;
const URL = `http://52.206.83.98/edbw/api/v1/groups/?key=${KEY}&totp=031082`;


class Groups extends Component {
  constructor(props) {
    super(props);

    this.state = { groups: [], groupsSelected: {} };

    this.clicked = this.clicked.bind(this);
  }

  componentDidMount() {
    axios.get(URL, { headers: { "Access-Control-Allow-Origin": "*" } })
      .then(res => {
        const groups = res.data;
        this.setState({ groups });
      })
  }

  clicked(e) {
    this.props.onClick(e);
  }

  render() {
    return (
      <div>
        <div className={"groups"}>
          <ul>
            {this.state.groups.map(group => <Group key={group.id} onClick={this.clicked} group={group} />)}
          </ul>
          <Switch on={false} />
        </div>
      </div>
    );
  }
}

export default Groups;
