import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path="*" element= "Error : Halaman Tidak Tersedia" />
    </Routes>
  );
}

export default App;
