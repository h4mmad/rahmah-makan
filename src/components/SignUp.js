import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp1 = () => {
    return (
        <>
            <label htmlFor="name" className="mt-5 text-sm">Full Name</label>
            <input type="text" className="border border-darkGreen w-80 p-2 rounded-lg" placeholder="Full Name" />

            <label htmlFor="email" className="mt-5 text-sm">Email Address</label>
            <input type="email" className="border border-darkGreen w-80 p-2 rounded-lg" placeholder="Email" />

            <label htmlFor="password" className="mt-5 text-sm">Password</label>
            <input type="password" className="border border-darkGreen w-80 p-2 rounded-lg" placeholder="Password" />
        </>
    );
};
const SignUp2 = () => {
    return (
        <>
            <label htmlFor="name" className="mt-5 text-sm">Address</label>
            <input type="text" className="border border-darkGreen w-80 p-2 rounded-lg" placeholder="Full Name" />
        </>
    );
};



const SignUp = () => {
    const [index, setIndex] = useState(0);
    const elements = [<SignUp1 />, <SignUp2 />];

    function increment(){
        if (index >= elements.length-1)
            return;
        else
            setIndex(index+1);
    }
    function decrement(){
        if (index <= 0)
            return;
        else
            setIndex(index-1);
    }
    return (
        <>
            <form className="mt-5 flex flex-col items-start">

                {elements[index]}

                <button type="button" onClick={increment}>Next</button>
                <button type="button" onClick={decrement}>Prev</button>


                {/* <label htmlFor="name" className="mt-5 text-sm">Full Name</label>
                <input type="text" className="border border-darkGreen w-80 p-2 rounded-lg" placeholder="Full Name" />

                <label htmlFor="email" className="mt-5 text-sm">Email Address</label>
                <input type="email" className="border border-darkGreen w-80 p-2 rounded-lg" placeholder="Email" />

                <label htmlFor="password" className="mt-5 text-sm">Password</label>
                <input type="password" className="border border-darkGreen w-80 p-2 rounded-lg" placeholder="Password" /> */}


                <Link className="p-3 text-white text-center px-6 pt-2 w-100 bg-darkGreen w-full rounded-lg mt-5">Sign Up</Link>


            </form>
            <p className="mt-10">Already have an account? <Link to="/register/login" className="font-bold">Log In</Link></p>
        </>
    );
}

export default SignUp;