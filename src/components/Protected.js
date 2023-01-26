import { Navigate } from "react-router-dom";

const Protected = ({userData, children}) => {
    if(userData){
        return children;
    }
    return <Navigate to="/register/login"/>
}

export default Protected;