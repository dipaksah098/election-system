import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Slider from './components/Slider';
 import About from './pages/About';
 import {Routes,Route} from 'react-router-dom'
 import Register from './forms/Register';
 import Service from './pages/Service';
 import Pricing from './forms/pricing';
 import Login from './pages/login';
 import Candidate from './pages/Candidate';
 function App() {
  return (
    <>
      <div className="App">
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/candidate" element={<Candidate/>}/>
       </Routes>
      <Footer/>
    


      </div>
    </>

  );
}

export default App;
