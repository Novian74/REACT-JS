import 'bootstrap/dist/css/bootstrap.min.css';
import Back from './Back/Back';
import Front from './Front/Front';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kategori from './Back/Kategori';
import Menu from './Back/Menu';
import Pelanggan from './Back/Pelanggan';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index element={<Front />} />
          <Route path="/home" element={<Front />} />
          <Route path="/admin" element={<Back />} >
            <Route path="kategori" element={<Kategori />} />
            <Route path="menu" element={<Menu />} />
            <Route path="pelanggan" element={<Pelanggan />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
