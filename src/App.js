import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import Navbar from './components/pages/Navbar';
import Card from './pages/Card';


function App() {
  return (
    <div className="App">
      <Card name='nikhil' mobile='12323434345'  email='abc@mail.com' branch='BTech'/>
    </div>
  );
}

export default App;
