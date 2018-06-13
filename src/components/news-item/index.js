import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { distanceInWordsToNow } from 'date-fns';

import * as ducks from '../../ducks';
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
    const timeInMs = item.time * 1000;
    const timeInWords = distanceInWordsToNow(new Date(timeInMs));
    return (
      <div className="root">
        <span className="title">
          <a href={item.url}>{item.title}</a>
        </span>
        <span className="ingress">
          {item.score} points by&nbsp;
          <Link to={`/item/${item.id}`}>{item.by}</Link> {timeInWords} |&nbsp;
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
    item: ducks.data.items.selectors.item(state, ownProps.id)
  };
};

const mapDispatchToProps = {
  fetchItem: ducks.data.items.actions.fetchItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsItem);
