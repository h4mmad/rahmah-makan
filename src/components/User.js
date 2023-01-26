import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useEffect, useRef, useState } from "react";

const User = ({ userData, setUserData }) => {
  const [show, setShow] = useState(false);
  const dropDownRef = useRef();
  const picRef = useRef();

  function mySignOut() {
    signOut(auth)
      .then(() => {
        setUserData(null);
        console.log("User signed out");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }

  useEffect(() => {
    const closeDropDown = (e) => {
      if(e.target !== dropDownRef.current && e.target !== picRef.current){
        setShow(false);
      }
    };
    

    document.addEventListener("click", closeDropDown);


    return () => document.removeEventListener("click", closeDropDown);
  }, []);

  return (
    <>
      {userData ? (
        <div className="relative">
          <img
            ref={picRef}
            className="rounded-full w-14 border-2 border-darkGreen cursor-pointer"
            src={userData.photoURL}
            alt=""
            referrerPolicy="no-referrer"
            onClick={() => setShow(!show)}
          ></img>

          {show && (
            <div
              ref={dropDownRef}
              className={
                "border-darkGreen border-2 flex flex-col p-3 space-y-2 rounded-xl absolute md:right-0 bg-white z-50 shadow-lg"
              }
            >
              <h1 className="font-bold text-xl">{userData.displayName}</h1>

              <h3>{userData.email}</h3>
              <button                
                onClick={mySignOut}
                className="p-2 text-white  bg-darkGreen rounded-full hover:bg-brightRedLight"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default User;
