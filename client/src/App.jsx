import './App.css';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/page1' element={<Page1 />} />
      </Routes>
    </div>
  );
};




