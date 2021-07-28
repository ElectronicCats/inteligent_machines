import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './contexts/theme-context';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

console.log(
  `%c ${process.env.REACT_APP_VERSION}`,
  'font-size:10px; font-weight: bold; background:#00FF95; color:#0071b5;'
);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
