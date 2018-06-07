import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

export const Page = ({ children, isDarkTheme }) => {
  const class_name = isDarkTheme ? 'page page-dark' : 'page';
  return <div className={class_name}>{children}</div>;
};

const mapStateToProps = state => {
  return {
    isDarkTheme: state.ui.isDarkTheme
  };
};

export default connect(mapStateToProps, null)(Page);
