import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<TodoContainer />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </div>
);

export default App;
