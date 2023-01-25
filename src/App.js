import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AboutUs from './pages/AboutUs';
import DonatePage from './pages/DonatePage';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import WithNav from './pages/WithNav';
import WithoutNav from './pages/WithoutNav';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function App() {

  const [userData, setUserData] = useState(null);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid);
        setUserData(user);
        // ...
      } else {
        // User is signed out
        // ...
        signOut(auth).then(() => {
          // Sign-out successful.
          setUserData(null);
        }).catch((error) => {
          // An error happened.
          console.log(error);
        });
      }
    });
  }, [])
  return (
    <>
      <Routes>
        <Route element={<WithoutNav/>}>
          <Route path="/register" element={<Register setUserData={setUserData}/>}>
            <Route path='/register/login' element={<Login/>}/>
            <Route path='/register/sign-up' element={<SignUp/>}/>
          </Route>
        </Route>
        <Route element={<WithNav userData={userData} setUserData={setUserData}/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about-us" element={<AboutUs/>}/> 
          <Route path="/donate" element={<DonatePage/>}/>          
        </Route>
      </Routes>

    </>
  );
}

export default App;
