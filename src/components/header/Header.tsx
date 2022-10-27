import React from "react";
import Navbar from "./navbar/Navbar";
import Lang from "./lang/Lang";

const Header = () => {
    return (
        <div>
            <p>Header</p>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='lang'>
                <Lang />
            </div>
        </div>
    );
};

export default Header;