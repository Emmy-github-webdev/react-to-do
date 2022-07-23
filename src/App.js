import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import NotMatch from './pages/NotMatch';

const App = () => (
  <Routes>
    <Route path="/" element={<TodoContainer />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotMatch />} />
  </Routes>
);

export default App;
