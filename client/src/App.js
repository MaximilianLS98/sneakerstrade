import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import CreateSneaker from './pages/CreateSneaker';
import Profilepage from './pages/Profilepage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sneaker/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateSneaker />} />
          <Route path="/profile" element={<Profilepage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
