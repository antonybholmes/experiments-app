import React, { Component } from "react";

import "./search-bar.scss";
import MaterialIcon1x from "../MaterialIcon1x";


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: props.query, samples: [{ id: -1, n: "No results" }] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSearch(this.state.query);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      
        <form onSubmit={this.handleSubmit}>
        <div className="row no-flex row-center row-vert-center search-bar">
          <input type="text" className="column search-box" value={this.state.query} onChange={this.handleChange} />
          <button type="submit" className="row no-flex search-button">
            <MaterialIcon1x name="search"/>
          </button>
          </div>
        </form>
      
    );
  }
}

export default SearchBar;