import { Link } from "react-router-dom";
import MyButton from "./MyButton";

const Navbar = () => {
    return (
        <nav className="relative container p-6 mx-auto">
            <div className="flex items-center justify-between">
                <Link to="/" className="text-myBlue text-xl baseline font-bold">
                    Rahmah Makan
                </Link>

                <div className="hidden space-x-6 md:flex">
                    <Link to="/about-us" className="hover:text-darkGrayishBlue">About us</Link>
                    <Link className="hover:text-darkGrayishBlue">About us</Link>
                    <Link className="hover:text-darkGrayishBlue">About us</Link>
                </div>

                <MyButton text="Sign Up"/>
            </div>


        </nav>

    );
}

export default Navbar;