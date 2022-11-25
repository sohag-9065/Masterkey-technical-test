import React from 'react';
import Heading from '../shared/Heading';
import img1 from '../../assets/searchImage/img1.png'
import img2 from '../../assets/searchImage/img2.png'
import img3 from '../../assets/searchImage/img3.png'
import img4 from '../../assets/searchImage/img4.png'
import img5 from '../../assets/searchImage/img5.png'
import img6 from '../../assets/searchImage/img6.png'

const SearchItem = () => {
    const searchImg = [img1, img2 , img3, img4, img5, img6]
    return (
        <div className='mt-16'>
            <Heading>Your searched items</Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  gap-4 lg:gap-10 justify-center items-center justify-items-center mx-auto mt-7'>
                {
                    searchImg.map((img, index) => <img
                        key={index}
                        src={img}
                        alt=''
                        
                    >
                    </img>)
                }
            </div>

        </div>
    );
};

export default SearchItem;