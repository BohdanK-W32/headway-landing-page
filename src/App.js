import React from 'react';
import { Route } from 'react-router-dom';
import Page from './components/Page/Page';
import FacebookScripts from './services/facebookScripts';

const App = () => (
  <div>
    <Route path="/thanks" component={FacebookScripts} />
    <Route path="/" component={Page} />
  </div>
);

export default App;
