import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import { Menu } from '../menu';
import './styles.css';

const mainMenu = [
  { text: 'New', url: 'https://news.ycombinator.com/newest' },
  { text: 'Show', url: 'https://news.ycombinator.com/show' },
  { text: 'Submit', url: 'https://news.ycombinator.com/submit' }
];

export const Header = props => (
  <div className="header">
    <Link className="header__logo" to="/">
      <img src="https://news.ycombinator.com/y18.gif" alt="React news logo" />
      React News
    </Link>
    <div className="header__menu">
      <Menu links={mainMenu} />
    </div>
    <button onClick={() => props.toggleTheme()}>Toggle Theme</button>
  </div>
);

const mapStateToProps = state => {};

const mapDispatchToProps = {
  toggleTheme: actions.toggleTheme
};

export default connect(null, mapDispatchToProps)(Header);
