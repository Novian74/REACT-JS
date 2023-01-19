import './App.css';
import './style.css';
import Kontak from './pages/Kontak';
import Nav from './pages/Nav';
import Sejarah from './pages/Sejarah';
import Tentang from './pages/Tentang';
import Home from './pages/Home';
import Siswa from './pages/Siswa';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        < Nav />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/siswa" element={<Siswa />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
