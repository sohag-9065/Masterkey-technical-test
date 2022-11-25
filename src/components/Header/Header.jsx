import React from 'react';
import MenuNames from './MenuNames';
import Navlogo from './Navlogo';
import SearchNav from './SearchNav';

const Header = () => {
    return (
        <div>
            <Navlogo />
            <hr className='text-[#808080]' />
            <SearchNav />
            <MenuNames />
        </div>
    );
};

export default Header;