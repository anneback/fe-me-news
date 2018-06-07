import React from 'react';
import { connect } from 'react-redux';

import * as ducks from '../../ducks';

import './styles.css';

export const Page = ({ children, isDarkTheme }) => {
  const class_name = isDarkTheme ? 'page page-dark' : 'page';
  return <div className={class_name}>{children}</div>;
};

const mapStateToProps = state => {
  return {
    isDarkTheme: ducks.ui.selectors.isDarkTheme(state)
  };
};

export default connect(
  mapStateToProps,
  null
)(Page);
