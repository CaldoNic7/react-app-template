import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import HelloWorld from './components/HelloWorld'

const appJsx = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

render(<HelloWorld />, document.getElementById('root'))