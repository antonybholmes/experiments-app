import React, { Component } from "react";
import "../../app.css";
import "./search.css";
import Samples from "./samples/Samples";
import Constants from '../../Constants'

const KEY = Constants.KEY;
const URL = `http://52.206.83.98/edbw/api/v1/samples/search?&key=${KEY}&totp=031082&q=`;



class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: props.query, samples: [{ id: -1, n: "No results" }] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('du ' + this.state.query)

    this.props.onSearch(this.state.query);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <div className={"search-bar"}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;