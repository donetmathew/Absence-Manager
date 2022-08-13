import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Dashboard from './pages/Dashboard/Dashboard';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <Header/>
      <div className="page-wrapper">
        <Dashboard/>
      </div>
    </>
  );
}

export default App;
