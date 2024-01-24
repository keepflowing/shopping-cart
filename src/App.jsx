import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <main>
      <Navbar title="My Store" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
