import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Bollywood from './pages/Bollywood';
import Hollywood from './pages/Hollywood';
import South from './pages/South';
import Animated from './pages/Animated';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      'div',
      null,
      React.createElement(Header),
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: '/', element: React.createElement(Home) }),
        React.createElement(Route, { path: '/bollywood', element: React.createElement(Bollywood) }),
        React.createElement(Route, { path: '/hollywood', element: React.createElement(Hollywood) }),
        React.createElement(Route, { path: '/south', element: React.createElement(South) }),
        React.createElement(Route, { path: '/animated', element: React.createElement(Animated) })
      ),
      React.createElement(Footer)
    )
  );
}

export default App;
