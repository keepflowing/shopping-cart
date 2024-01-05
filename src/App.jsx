import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/store" element={<h1>STORE</h1>} />
        <Route path="/store/item/:id" element={<h1>Item</h1>} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
}
