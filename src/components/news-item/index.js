import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { api } from '../../utils';
import './styles.css';

export class NewsItem extends Component {
  constructor(props) {
    super(props);

    this.state = { item: undefined };
  }

  componentDidMount() {
    api
      .getItem(this.props.id)
      .then(item => {
        this.setState({ item });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { item } = this.state;
    if (!item) {
      return <div>Loading...</div>;
    }
    const timeInMs = item.time * 1000;
    return (
      <div className="root">
        <span className="title">
          <a href={item.url}>{item.title}</a>
        </span>
        <span className="ingress">
          {item.score} points by&nbsp;
          <Link to={`/item/${item.id}`}>{item.by}</Link> {timeInMs} ago |&nbsp;
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
