import React, { Component } from 'react';

import { NewsItemList } from '../';

import { api } from '../../utils';

const isArraysEqual = (arr1, arr2) => arr1.toString() === arr2.toString();

export class PageNewsList extends Component {
  constructor(props) {
    super(props);

    this.state = { ids: undefined };
  }

  componentDidMount() {
    api
      .getItems()
      .then(ids => {
        this.setState({ ids });
      })
      .catch(err => {
        console.log(err);
      });
  }

  /* shouldComponentUpdate(nextProps, nextState) {
    // TODO: access current this.state and this.props
    // use isArraysEqual to check list of ids for `/`
  } */

  render() {
    const { ids } = this.state;
    console.log(ids);
    if (!ids) {
      return <div>Loading...</div>;
    }
    return <div>{<NewsItemList ids={ids} />}</div>;
  }
}
