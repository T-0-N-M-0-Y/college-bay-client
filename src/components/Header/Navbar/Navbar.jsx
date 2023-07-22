import { Link } from "react-router-dom";

const Navbar = () => {


    return (
        <div>
            <div className="navbar px-20 fixed bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link><li className="text-sky-950 hover:underline hover:text-orange-500 mr-2">HOME</li></Link>
                            <Link><li className="text-sky-950 hover:underline hover:text-orange-500 mr-2">COLLEGES</li></Link>
                            <Link><li className="text-sky-950 hover:underline hover:text-orange-500 mr-2">ADMISSION</li></Link>
                            <Link><li className="text-sky-950 hover:underline hover:text-orange-500">MY COLLEGE</li></Link>
                        </ul>
                    </div>
                    <p className="text-xl font-extrabold text-sky-950">COLLEGE <span className="text-orange-500">BAY</span></p>
                </div>
                <div className="navbar-end hidden lg:flex items-center">
                    <ul className="menu menu-horizontal font-bold">
                        <Link><li className="text-sky-950 hover:underline hover:text-orange-500 mr-2">HOME</li></Link>
                        <Link><li className="text-sky-950 hover:underline hover:text-orange-500 mr-2">COLLEGES</li></Link>
                        <Link><li className="text-sky-950 hover:underline hover:text-orange-500 mr-2">ADMISSION</li></Link>
                        <Link><li className="text-sky-950 hover:underline hover:text-orange-500">MY COLLEGE</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;