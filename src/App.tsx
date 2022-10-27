import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {
  return (
    <div className='app'>
      <Header />
        <div className='content'>
            <Main />
        </div>


    </div>
  );
}

export default App;
