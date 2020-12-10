import './master.css';
import React from 'react';
import Route from './components/Route';
import LandingPage from './pages/LandingPage';
import WorkPage from './pages/WorkPage';

const App = () => {
  return (
    <div>
      <Route path="/">
        <LandingPage />
      </Route>
      <Route path="/work">
        <WorkPage />
      </Route>
    </div>
  );
}

export default App;
