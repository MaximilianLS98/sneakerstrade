import React, {useRef} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import CreateSneaker from './pages/CreateSneaker';
import EditSneaker from './pages/EditSneaker';
import Profilepage from './pages/Profilepage';
import BrandPage from './pages/BrandPage';
import UserProfiles from './pages/UserProfiles';
import PusherChat from './pages/PusherChat';
import FourOhFour from './pages/404';
import Header from './components/Header';
import Footer from './components/Footer';
import Messenger from './pages/Messenger';
import Blocker from './components/Blocker';
import About from './pages/About';
import './App.css';


function App() {

  return (
    <div className="App">
      <Router>
      <Header />
      <Blocker />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sneaker/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateSneaker />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/user/:id" element={<UserProfiles />} />
          <Route path="/edit/:id" element={<EditSneaker />} />
          <Route path="/sneakers/:brand" element={<BrandPage />} />
          <Route path="/chat" element={<PusherChat />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
