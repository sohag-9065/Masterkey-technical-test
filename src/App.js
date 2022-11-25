import './App.css';
import Header from './components/Header/Header';
import HotDealBanner from './components/HotDealBanner/HotDealBanner';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import Alexabanner from './components/Alexabanner/Alexabanner';
import TodayDeal from './components/TodayDeal/TodayDeal';
import SearchItem from './components/SearchItem/SearchItem';
import SpecialBanner from './components/SpecialBanner/SpecialBanner';
import DealsSection from './components/DealsSection/DealsSection';
import FooterSection from './components/FooterSection/FooterSection';
import ReviewSection from './components/ReviewSection/ReviewSection';

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
      <div>
        <div className='max-w-screen-2xl mx-auto px-6 '>
          <Header />
          <HotDealBanner />
          <Alexabanner />
          <TodayDeal />
          <SearchItem />
          <SpecialBanner />
          <DealsSection />
          <ReviewSection />
          
        </div>
        <div className='bg-[#404040]  py-16 mt-28'>
        <FooterSection />
        </div>
      </div>
    </ProductsContext.Provider>

  );
}

export default App;
