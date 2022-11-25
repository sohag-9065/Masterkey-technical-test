import React from 'react';

const HotDealCard = ({product}) => {
    const {name, picture, price, discount} = product
    console.log(product)
    return (

        <div className="card w-64 h-80 bg-base-100 shadow-xl p-3">
            <figure><img src={picture} alt="Shoes" className='w-60 h-60 p-2'/></figure>
            <div className="card-body p-0 mt-1">
                <h2 className="text-base font-medium">
                    {name}
                </h2>
                <div className="card-actions justify-between">
                    <div className="">₹{price}</div>
                    <div className="text-[#FF3232]">
                        <p>-{discount}% off</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HotDealCard;