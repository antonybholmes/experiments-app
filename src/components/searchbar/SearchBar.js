import React, { Component } from "react";

import "./search-bar.scss";


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
      <div className="row row-center row-vert-center search-bar">
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="search-box" value={this.state.query} onChange={this.handleChange} />
          <button type="submit" className="search-button fas fa-search" />
        </form>
      </div>
    );
  }
}

export default SearchBar;