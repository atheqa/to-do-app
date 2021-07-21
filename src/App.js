import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToDoView } from './ToDoView';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ToDoView} />
    </Router>
  );
}

export default App;
