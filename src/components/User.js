import { auth } from "../firebase";

const User = ({userData, setUserData}) =>{

    async function signOut(){
        signOut(auth).then(() => {
            // Sign-out successful.
            setUserData(null);
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
                <button onClick={signOut}>Sign out</button>
            </div> : <></>}
        </>
    );
}

export default User;