import React from 'react';

import { Menu } from '../menu';
import './styles.css';

const additionalMenu = [
  { text: 'Pure UI',          url: 'https://rauchg.com/2015/pure-ui' },
  { text: 'Documentation',    url: 'https://reactjs.org/docs/' },
  { text: 'PropTypes',        url: 'https://reactjs.org/docs/typechecking-with-proptypes.html' },
  { text: 'Create react app', url: 'https://github.com/facebook/create-react-app/' },
  { text: 'github',           url: 'https://github.com/anneback/fe-me-news' },
];

export const Footer = () => (
  <div>
    <Menu links={additionalMenu} />
  </div>
)