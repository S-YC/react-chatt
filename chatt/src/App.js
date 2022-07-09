import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chat from './components/Chart';
import Join from './components/Join';

const App = () => {
  return (
    <Router>
      <Route path="/" component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;