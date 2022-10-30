// Sass
import './App.sass';
// hooks
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home.js";
import AboutUs from "./pages/AboutUs.js";
import Cadastros from "./pages/Cadastros.js";
import Login from "./pages/Login.js";
import NewAccount from "./pages/NewAccount.js";
// components
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/cadastros" element={<Cadastros />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new-account" element={<NewAccount />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
