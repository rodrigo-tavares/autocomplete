import React from 'react';
import ReactDOM from 'react-dom/client';
import Autocomplete from './container/Autocomplete';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Autocomplete />
  </React.StrictMode>
);
