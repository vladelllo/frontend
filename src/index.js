import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);

reportWebVitals();
