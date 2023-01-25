import { Link, Outlet, useLocation } from "react-router-dom";
import GoogleIcon from "../images/google-icon.png";
import {signInWithPopup} from "firebase/auth";
import {auth, provider} from "../firebase";

const Form = ({setUserData}) => {
  const location = useLocation();

async function authenticate(){
    console.log('Button clicked');
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    //const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    setUserData(user);
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    //const email = error.customData.email;
    // The AuthCredential type that was used.
    //const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode);
    console.log(errorMessage);
    
    // ...
  });
  }



  return (
    <>
      <div className="flex justify-center bg-darkGreen p-4">
        <Link to="/" className="text-white text-xl baseline font-bold">
          Rahmah Makan
        </Link>
      </div>
      <div className="container flex flex-col items-center mx-auto px-6 mt-28">
        <h2 className="font-bold text-veryDarkBlue text-3xl">
          {location.pathname === "/register/login"
            ? "Log in to your account"
            : "Create your account."}
        </h2>

        <button onClick={authenticate} className="rounded-lg w-80 text-center p-2 mt-10 hover:bg-veryLightGray border border-darkGreen font-bold">
          <img
            src={GoogleIcon}
            className="inline mr-5 w-10"
            alt="google-icon"
          />
          Continue with Google
        </button>

        <div className="flex flex-row items-center mt-10">
          <div className="bg-darkGrayishBlue w-36 h-0.5"></div>
          <p className="px-2">OR</p>
          <div className="bg-darkGrayishBlue w-36 h-0.5"></div>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Form;
