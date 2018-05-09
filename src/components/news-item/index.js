import React from 'react';
import { Link } from 'react-router-dom';

import { api } from '../../utils/api';
import './styles.css';

export const NewsItem = ({ id }) => {
  const item = api.getItem(id);
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
};
