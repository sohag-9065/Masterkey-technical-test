import React, { useContext } from 'react';
import { ProductsContext } from '../../App';
import HotDealCard from '../HotDealBanner/HotDealCard';
import Heading from '../shared/Heading';

const TodayDeal = () => {
    const products = useContext(ProductsContext);
    return (
        <div className='mt-16'>
            <Heading>Today’s hot deals</Heading>
            <div className=' px-4  rounded-2xl'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-4 lg:gap-10 justify-center items-center justify-items-center mx-auto mt-7'>
                    {
                        products.slice(6, 11).map((product) => <HotDealCard
                            key={product._id}
                            product={product}
                        >
                        </HotDealCard>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default TodayDeal;