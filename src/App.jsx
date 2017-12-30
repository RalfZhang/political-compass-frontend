import React from 'react';
// import { render } from 'react-dom';
import PropTypes from 'prop-types';
import Drawer from './components/Drawer';


const App = props => (
  <Drawer>
    {props.children}

  </Drawer>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
