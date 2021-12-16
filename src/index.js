import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

if(localStorage.getItem('clickOnPrimary') === null && localStorage.getItem('menuSelected') === null && localStorage.getItem('gearSelected') === null){
  localStorage.setItem('menuSelected', 'materials-0');
  localStorage.setItem('gearSelected', 'Athletix');
  localStorage.setItem('clickOnPrimary', 'false');
}

ReactDOM.render(<App />, document.getElementById('root'));
