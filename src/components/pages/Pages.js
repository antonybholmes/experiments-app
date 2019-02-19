import React, { Component } from "react";

import "./pages.scss";
import Page from "./Page";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import { ETIME } from "constants";


class Pages extends Component {
  constructor(props) {
    super(props);

    this.pageClicked = this.pageClicked.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  pageClicked(e, page) {
    this.props.onPageChange(page);
  }

  prev(e) {
    if (this.props.page > 1) {
      this.props.onPageChange(this.props.page - 1);
    }
  }

  next(e) {
    if (this.props.page < this.props.pages) {
      this.props.onPageChange(this.props.page + 1);
    }
  }

  render() {
    return (
      <div className="row no-flex row-center row-vert-center pages">
        {this.renderPages(this.props.page, this.props.pages)}
      </div>
    );
  }

  renderPages(page, pages) {
    let ret = [];

    console.log('pages ' + page + " " + pages);

    ret.push(<PrevButton onClick={this.prev} />)

    for (let i = 1; i <= pages; ++i) {
      ret.push(<Page page={i} selected={i === this.props.page} onClick={this.pageClicked} />);
    }

    ret.push(<NextButton onClick={this.next} />)

    return ret;
  }
}

export default Pages;