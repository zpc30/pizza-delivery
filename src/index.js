import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navigation from './components/Navigation';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider
      theme={{
        color: 'yellow',
      }}
    >
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="menu" element={<Menu />} /> */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
