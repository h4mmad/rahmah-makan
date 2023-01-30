import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AboutUs from "./pages/AboutUs";
import DonatePage from "./pages/DonatePage";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import WithNav from "./pages/WithNav";
import WithoutNav from "./pages/WithoutNav";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
// import Protected from "./components/Protected";

function App() {
  const [userData, setUserData] = useState(null);
  const [goTo, setGoTo] = useState(null);
  console.log(setGoTo);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserData(user);
    } else {
      setUserData(null);
    }
  });

  return (
    <>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route
            path="/register"
            element={<Register setUserData={setUserData} goTo={goTo}/>}
          >
            <Route path="/register/login" element={<Login />} />
            <Route path="/register/sign-up" element={<SignUp />} />
          </Route>
        </Route>
        <Route
          element={<WithNav userData={userData} setUserData={setUserData} />}
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/donate" element={<DonatePage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
