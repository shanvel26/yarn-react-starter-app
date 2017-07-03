import React from 'react';
import { render } from 'react-dom';
import Home from './home.jsx';

if (module.hot) {
  console.log('hot reload enabled.,,')
  // module.hot.accept('./home.jsx', function() {
    console.log('Accepting the updated library module!');
    const App = require('./home.jsx').default;
    render(
      <div>Hello good super</div>,
      document.getElementById('root')
    );
  // })
}
else {
  console.log("not enabled...")
}