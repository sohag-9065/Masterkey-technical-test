import React from 'react';

const MenuNames = () => {
    const menuItems = [
        "Fresh",
        "Today’s Deals",
        "Mobiles",
        "Gift Cards",
        "Women Clothing",
        "Men Clothing",
        "Kids Clothing",
        "Health",
        "Pet corner",
        "Books",
        "Beauty",
        "Kitchen",
        "Bed Room",
        "Sport",
        "Bags",
    ]
    return (
        <div className='flex flex-wrap justify-between px-4 ' >
            {
               menuItems.map((menu, index) => <p
               key={index}
               className="pr-4"
               >{menu}</p> 
               ) 
            }
        </div>
    );
};

export default MenuNames;