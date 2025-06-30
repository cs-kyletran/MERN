import './App.css';
import Crochets from './pages/Crochets';
import Home from './pages/Home';
import Jewelry from './pages/Jewelry';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/jewelry' element={<Jewelry />} />
        <Route path='/crochets' element={<Crochets />} />
      </Routes>
    </div>
  );
};




