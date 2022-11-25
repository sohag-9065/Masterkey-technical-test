import React from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const SearchNav = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="flex-1 ">
                <div className="flex justify-center items-center p-2 rounded-2xl bg-[#FFAE5D]">
                    <FaMapMarkerAlt />
                    <span className='ml-2'>Dhaka, 1212</span>
                </div>
            </div>
            <div className="flex-none">
                <div className=" flex justify-between items-center  rounded-2xl border pr-2 w-[622px]">
                    <input type="text" placeholder="Search" className="input  rounded-2xl" />
                    <FaSearch />
            
                </div>
                
            </div>
        </div>
    );
};

export default SearchNav;