import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Mens from './components/Mens';
import Women from './components/Women';
function App() {
  return (
    <div className="App">
      <Navbar/>
      
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/register' element={<Register />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/mens' element={<Mens/>} />
          <Route path='women' element={<Women/>}/>
        </Routes>
    </div>
  );
}

export default App;

