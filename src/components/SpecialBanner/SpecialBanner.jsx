import React from 'react';
import special from '../../assets/special.png'
import fur from '../../assets/fur.png'

const SpecialBanner = () => {

    return (
        <div className='mt-16'>
            <div className=" min-h-screen" style={{ backgroundImage: `url(${special})` }}>
                <div className=" flex justify-center pt-36 ">
                    <img src={fur} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SpecialBanner;