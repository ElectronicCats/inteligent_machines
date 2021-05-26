import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './contexts/theme-context';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

console.log(process.env.REACT_APP_VERSION);

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
