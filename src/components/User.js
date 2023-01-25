import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const User = ({ userData, setUserData }) => {
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

  return (
    <>
      {userData ? (
        <div className="flex flex-row">
          <div class="tooltip">
            <img
              className="rounded-full w-14 border-2 border-darkGreen"
              src={userData.photoURL}
              alt=""
            ></img>
            <span class="tooltipcontent">
              <button onClick={mySignOut}>Sign out</button>
            </span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default User;
