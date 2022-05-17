import React from 'react';
import Toolbar from '../../Components/Toolbar';
import BurgerPage from '../BurgerPage';
import './App.css';

function App() {
  return (
    <div>
      <Toolbar />
      <main className='Content'>
        <BurgerPage />
      </main>
    </div>
  );
}

export default App;
