import React, { useContext } from 'react';
import { ProductsContext } from '../../App';
import HotDealCard from '../HotDealBanner/HotDealCard';
import Heading from '../shared/Heading';

const DealsSection = () => {
    
    const products = useContext(ProductsContext);
    return (
        <div className='mt-16'>
            <Heading>Deals on furniture</Heading>
            <div className=' px-4  rounded-2xl'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-4 lg:gap-10 justify-center items-center justify-items-center mx-auto mt-7'>
                    
                    {
                            products.slice(products.length-5,products.length).map((product) => <HotDealCard
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

export default DealsSection;