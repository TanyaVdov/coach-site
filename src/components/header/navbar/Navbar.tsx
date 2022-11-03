import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className='navbar'>

            <div className='nav_item'>
                <Link to='/' >Main</Link>
            </div>

            <div className='nav_item'>
                <Link to='/about' >About</Link>
            </div>

            <div className='nav_item'>
                <Link to='/result' >Result</Link>
            </div>
        </div>
    );
};

export default Navbar;