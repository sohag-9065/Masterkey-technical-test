import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, price, details, img } = review;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Movie" className='h-80 w-80'/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div>
                    <p className='pb-0'>{details}</p>
                    <p>{price}</p>
                </div>
                <div className="rating rating-lg">
                    <input type="radio" name="rating-8" className="mask mask-star-2 border-2  bg-orange-400" />
                    <input type="radio" name="rating-8" className="mask mask-star-2 border-2  bg-orange-400" />
                    <input type="radio" name="rating-8" className="mask mask-star-2 border-2  bg-orange-400" />
                    <input type="radio" name="rating-8" className="mask mask-star-2 border-2  bg-orange-400" />
                    <input type="radio" name="rating-8" className="mask mask-star-2 border-2  bg-orange-400" />
                </div>

            </div>
        </div>
    );
};

export default ReviewCard;