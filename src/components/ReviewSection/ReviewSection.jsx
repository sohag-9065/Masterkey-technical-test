import React from 'react';
import Heading from '../shared/Heading';
import ph1 from '../../assets/Phone/ph1.png'
import ph2 from '../../assets/Phone/ph2.png'
import ReviewCard from './ReviewCard';

const ReviewSection = () => {
    const reviews = [
        {
            img: ph1,
            name: "2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB)",
            price: "₹99,900.00",
            details: "you bought it at the best price"
            
        },
        {
            img: ph2,
            name: "iPhone 14 Pro Max with Apple M1 chip (6.7-inch/17.0 cm, 128GB)",
            price: "₹1,39,900.00",
            details: "you bought it at the best price"
        }
    ]
    return (
        <div className='mt-16'>
            <Heading>Review your purchase</Heading>
            <div>
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-10 justify-center items-center justify-items-center mx-auto mt-7'>
                    {
                        reviews.map((review, index) => <ReviewCard
                            key={index}
                            review={review}
                        >
                        </ReviewCard>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;