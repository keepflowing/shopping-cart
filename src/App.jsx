import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Store from './components/Store/Store';
import Errorpage from './components/Errorpage/Errorpage';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/item/:id" element={<h1>Item</h1>} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}
