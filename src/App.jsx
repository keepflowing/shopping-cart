import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Store from './components/Store/Store';
import Iteminfo from './components/Iteminfo/Iteminfo';
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
        <Route path="/store">
          <Route index element={<Store items={itemList} />} />
          <Route path="item/:id" element={<Iteminfo items={itemList} />} />
        </Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}
