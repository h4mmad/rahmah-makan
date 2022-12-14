import MyButton from "./MyButton";
import Pattern from "../images/pattern.svg";
import Header from "./Header";
import { Link } from "react-router-dom";
import GoogleIcon from "../images/google-icon.png";

const Form = () => {
    return (
        <>
            <div className="flex justify-center bg-darkGreen p-4">
                <Link to="/" className="text-white text-xl baseline font-bold">
                    Rahmah Makan
                </Link>
            </div>
            <div className="container flex flex-col items-center mx-auto px-6 mt-32">

                <h2 className="font-bold text-veryDarkBlue text-3xl">Log in to your account</h2>

                <Link className="bg- rounded-lg w-80 text-center p-2 mt-10 hover:bg-veryLightGray border border-darkGreen font-bold">
                    <img src={GoogleIcon}
                        className="inline mr-5 w-10"
                    />Continue with Google
                </Link>

                <div className="flex flex-row items-center mt-10">
                    <div className="bg-darkGrayishBlue w-36 h-0.5"></div>
                    <p className="px-2">OR</p>
                    <div className="bg-darkGrayishBlue w-36 h-0.5"></div>
                </div>

                <form className="mt-5 flex flex-col items-start">


                    <label htmlFor="email" className="mt-5 text-sm">Email Address</label>
                    <input type="email" className="border border-darkGreen w-80 p-2 rounded-lg" placeholder="Email" />

                    <label htmlFor="email" className="mt-5 text-sm">Password</label>
                    <input type="password" className="border border-darkGreen w-80 p-2 rounded-lg" placeholder="Password" />

                    
                    <Link className="p-3 text-white text-center px-6 pt-2 w-100 bg-darkGreen w-full rounded-lg mt-5">Log In</Link>
                    

                </form>


                <p className="mt-10">Don't have an account? <Link className="font-bold text-darkGreen">Sign up</Link></p>


            </div>
        </>
    );
};

export default Form;