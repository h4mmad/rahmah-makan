import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ userData, children, setGoTo }) => {
  
    let location = useLocation();

    useEffect(()=>{ 
        setGoTo(location.pathname);
    })

    if (userData) {
        return children;
    }
  return <Navigate to="/register/login" />;
};

export default Protected;
