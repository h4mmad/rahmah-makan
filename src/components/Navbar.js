import { Link, NavLink } from "react-router-dom";
import MyButton from "./MyButton";


const Navbar = () => {
    return (
        <nav className="relative container p-6 mx-auto">
            <div className="flex items-center justify-between">
                <Link to="/" className="text-darkGreen text-xl baseline font-bold">
                    Rahmah Makan
                </Link>
                {/* <div className="">
                    <img src={Logo} className="w-36"></img>
                </div> */}

                <div className="hidden space-x-6 md:flex">
                    <NavLink to="/" className=" hover:text-darkGrayishBlue">Home</NavLink>
                    <NavLink to="/about-us" className="hover:text-darkGrayishBlue">About us</NavLink>
                    {/* <NavLink to="/" className="hover:text-darkGrayishBlue">Register</NavLink> */}
                </div>


                <MyButton text="Log In" to="/register/login" className="hidden md:block"/>

                {/* Hamburger Icon */}
                <button id="menu-btn"
                    className="block hamburger md:hidden focus:outline-none">
                    <span id="hamburger-top"></span>
                    <span id="hamburger-middle"></span>
                    <span id="hamburger-bottom"></span>
                </button>


            </div>

            <div className="md:hidden">
                <div className="flex flex-col items-center">
                    <NavLink to="/" className=" hover:text-darkGrayishBlue">Home</NavLink>
                    <NavLink to="/about-us" className="hover:text-darkGrayishBlue">About us</NavLink>
                    <NavLink to="/register/login" className="hover:text-darkGrayishBlue">Login</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;