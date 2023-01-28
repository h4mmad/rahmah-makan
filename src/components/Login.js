import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <form className="mt-5 flex flex-col items-start">
                <label htmlFor="email" className="mt-5 text-sm">Email Address</label>
                <input type="email" className="border border-darkGreen w-80 p-2 rounded-lg" placeholder="Email" />

                <label htmlFor="email" className="mt-5 text-sm">Password</label>
                <input type="password" className="border border-darkGreen w-80 p-2 rounded-lg" placeholder="Password" />

                <button onClick={(e) => e.preventDefault()} className="p-3 text-white text-center px-6 pt-2 w-100 bg-darkGreen w-full rounded-lg mt-5 font-bold">Log In</button>
            </form>
            <p className="mt-10">Don't have an account? <Link to="/register/sign-up" className="font-bold">Sign Up</Link></p>
        </>
    );

}
export default Login;