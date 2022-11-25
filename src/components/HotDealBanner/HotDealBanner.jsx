import React, { useContext } from 'react';
import { ProductsContext } from '../../App';
import Heading from '../shared/Heading';
import HotDealCard from './HotDealCard';

const HotDealBanner = () => {
    const products = useContext(ProductsContext);

    return (
        <div className='flex flex-col lg:flex-row justify-between items-center mt-16'>
            <div>
                <p className='text-8xl'>We picked <br />some <span className='text-[#FFAE5D]'>cool <br />things</span>  for <br />you!</p>
            </div>
            <div className='w-full lg:w-[878px] mt-10 '>
                {/* <h3 className='text-2xl border-dashed border-b-2 border-[#FFAE5D] pb-3'>hot deals for you</h3> */}
                <Heading>hot deals for you</Heading>
                <div className=' px-4  rounded-2xl'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 lg:gap-10 justify-center items-center justify-items-center mx-auto mt-5'>
                        {
                            products.slice(0,6).map((product) => <HotDealCard
                                key={product._id}
                                product={product}
                            >
                            </HotDealCard>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HotDealBanner;