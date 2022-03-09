import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import './global.css';
import PizzaOrder from './pages/PizzaOrder';

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
          <Route path="pizzaOrder" element={<PizzaOrder />} />
          <Route path="menu" element={<Menu />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
