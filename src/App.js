import React, {Component} from 'react';
import { Route, Routes } from 'react-router-dom'

import HelloWorld from './components/HelloWorld';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Routes>
        <Route
        path='/'
        element={<HelloWorld/>}
        />
      </Routes>
    );
  }
}

export default App;