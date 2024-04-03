import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const ProtectedRoute = ({children}) => {
    const {user} =  useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    console.log(children);
    if (user) {
        return children;
    }
  return <Navigate to={"/sign-in"} state={location.pathname}></Navigate>;
}


export default ProtectedRoute;