import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const WithNav = ({userData, setUserData}) => {
    return(
        <>
            <Navbar userData={userData} setUserData={setUserData}/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default WithNav;