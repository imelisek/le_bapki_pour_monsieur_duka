import React from 'react';
import './style.css';

import {
  Link
} from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/quote_kanya_west">Quotes</Link>
          </li>
        </ul>
      </nav>
      <header className="App-header">
        {children}
      </header>
    </div >
  );
}

export default Layout;
