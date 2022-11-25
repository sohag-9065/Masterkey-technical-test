import React from 'react';

const FooterSection = () => {
    return (
        <div className='max-w-screen-2xl flex justify-between text-white mx-auto '>
            <div>
                <h3 className='text-3xl'><span className=' font-bold'>Shop</span>cart</h3>
            </div>
            <div className='flex space-x-6'>
                <p>About us</p>
                <p>Contact</p>
                <p>Help</p>
            </div>
            <div>
                <div tabIndex={0} className="collapse collapse-arrow ">
                    <div className="collapse-title text-base font-medium">
                        English
                    </div>
                    <div className="collapse-content">

                    </div>
                </div>
            </div>

        </div>
    );
};

export default FooterSection;