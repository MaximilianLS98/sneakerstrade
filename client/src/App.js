import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sneaker/:id" element={<SingleProduct />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
