import React, { Component } from 'react';
import { NewsItemList } from '../';

import { api } from '../../utils';

const isArraysEqual = (arr1 = [], arr2 = []) =>
  arr1.toString() === arr2.toString();

export class PageNewsList extends Component {
  constructor(props) {
    super(props);

    this.state = { ids: undefined };

    this.fetchItems = () => {
      api
        .getItems()
        .then(ids => {
          this.setState({ ids });
        })
        .catch(err => {
          console.log(err);
        });
    };
  }

  componentDidMount() {
    this.fetchItems();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isArraysEqual(this.state.ids, nextState.ids);
  }

  render() {
    const { ids } = this.state;
    if (!ids) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <button onClick={e => this.fetchItems()}>REFRESH</button>
        <NewsItemList ids={ids} />
      </div>
    );
  }
}
