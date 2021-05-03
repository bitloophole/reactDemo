import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import ViewPage from './component/viewPage';
import Navbar from './component/navbar';

function App() {
  return (
    //Use react fragmnet suggested by lalith
    <React.Fragment>
       <Navbar></Navbar>
      <ViewPage></ViewPage>
    </React.Fragment>
  );
}

export default App;
