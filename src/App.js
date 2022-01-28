import React from 'react';
import './App.css';
import Routerr from './components/Routerr';


function App() {
  return (
    <div className='app bg-dark'>
      <Routerr></Routerr>
    </div>
  );
}

export default React.memo(App);
