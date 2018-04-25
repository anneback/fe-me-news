import React from 'react';

import { Menu } from '../menu';
import './styles.css';

const mainMenu = [
  { text: 'New',    url: 'https://news.ycombinator.com/newest' },
  { text: 'Show',   url: 'https://news.ycombinator.com/show' },
  { text: 'Submit', url: 'https://news.ycombinator.com/submit' },
];

export const Header = () => (
  <div className="header">
    <span>
      <img src="https://news.ycombinator.com/y18.gif" alt="React news logo"/>
      React News
    </span>
    <Menu links={mainMenu} />
  </div>
)