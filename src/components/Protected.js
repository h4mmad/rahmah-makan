import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ userData, children, setGoTo }) => {
  
    let location = useLocation();

    useEffect(()=>{ 
        setGoTo(location.pathname);
        console.log(location.pathname);
    })

    if (userData) {
        console.log(location.pathname);
        return children;
    }
  return <Navigate to="/register/login" />;
};

export default Protected;
