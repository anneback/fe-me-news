import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import './styles.css';

export class NewsItem extends Component {
  componentDidMount() {
    this.props.fetchItem(this.props.id);
  }

  render() {
    const { item } = this.props;
    if (!item) {
      return <div>Loading...</div>;
    }
    const timeInMs = item.time / 1000;
    return (
      <div className="root">
        <span className="title">
          <a href={item.url}>{item.title}</a>
        </span>
        <span className="ingress">
          {item.score} points by&nbsp;
          <Link to={`/item/${item.id}`}>{item.by}</Link> {timeInMs} seconds ago
          |&nbsp;
          <Link to={`/item/${item.id}`}>
            {item.descendants === 0
              ? ' discuss'
              : '' + item.descendants + ' comments'}
          </Link>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    item: (state.data.items[ownProps.id] || {}).item
  };
};

const mapDispatchToProps = {
  fetchItem: actions.fetchItem
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem);
