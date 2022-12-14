import { Link, NavLink } from "react-router-dom";
import MyButton from "./MyButton";
import Logo from "../images/logo-3.png"

const Navbar = () => {

    const activeClassName = "border-b-4 border-darkGreen";
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
                    <Link to="/about-us" className="hover:text-darkGrayishBlue">About us</Link>
                    <Link to="/register" className="hover:text-darkGrayishBlue">Register</Link>
                </div>


                <MyButton text="Sign Up" to="/register"/>


            </div>
        </nav>

    );
}

export default Navbar;