import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import WithNav from './pages/WithNav';
import WithoutNav from './pages/WithoutNav';

function App() {
  return (
    <>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<WithNav/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>          
        </Route>
      </Routes>

    </>
  );
}

export default App;
