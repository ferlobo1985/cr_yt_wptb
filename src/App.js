import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import StageOne from './components/stage_1';
import StageTwo from './components/stage_2';

function App() {
  return (
    <div className="wrapper">
      <div className="center-wrapper"> 
        <h1>Who pays the bill ?</h1>

        <StageOne/>

      </div>
    </div>
  );
}

export default App;
