import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Store from './components/Store/Store';
import Errorpage from './components/Errorpage/Errorpage';

const url = "https://fakestoreapi.com/products?limit=8";

export default function App() {
  
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      result.json().then(r => {
        console.log(r);
        setItemList(r);
      })
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/store" element={<Store items={itemList}/>} />
        <Route path="/store/item/:id" element={<h1>Item</h1>} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}
