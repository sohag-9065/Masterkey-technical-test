import React from 'react';
import { FaUser } from "react-icons/fa";

const Navlogo = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="flex-1">
                <span className='ml-2 text-2xl'><span className='font-bold'>shop</span>cart</span>
            </div>
            <div className="flex-none ">
                <FaUser />
                <span className='ml-2'>Sign In</span>
            </div>
        </div>

    );
};

export default Navlogo;