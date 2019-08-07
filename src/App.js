import React from 'react';
import { Route } from 'react-router-dom';
import Page from './components/Page/Page';

const App = () => (
  <div>
    <Route path="/" component={Page} />
  </div>
);

export default App;
