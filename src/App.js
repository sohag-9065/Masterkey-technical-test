import './App.css';
import Header from './components/Header/Header';
import HotDealBanner from './components/HotDealBanner/HotDealBanner';
import { useEffect, useState } from 'react';
import { createContext } from 'react';

export const ProductsContext = createContext([])

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(e => console.log(e));

  }, [])

  return (
    <ProductsContext.Provider value={products}>
      <div className='max-w-screen-2xl mx-auto '>
        <Header />
        <HotDealBanner />
      </div>
    </ProductsContext.Provider>

  );
}

export default App;
