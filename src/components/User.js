import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const User = ({userData, setUserData}) =>{

    function mySignOut(){
        signOut(auth).then(() => {
            setUserData(null);
            console.log('User signed out');
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            console.log(error);
            
          });
    }

    return(
        <>
            {userData ? 
            <div>
                <img className="rounded-full w-14 border-2 border-darkGreen" src={userData.photoURL} alt=""></img>
                <button onClick={mySignOut}>Sign out</button>
            </div> : <></>}
        </>
    );
}

export default User;