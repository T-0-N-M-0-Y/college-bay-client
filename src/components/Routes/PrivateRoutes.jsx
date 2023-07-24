import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaSpinner } from 'react-icons/fa';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading)
    return (
        <>
        <span className="flex justify-center"><FaSpinner className='animate-spin text-4xl my-20'></FaSpinner></span>
        </>
    )

    if(user) {
        return children;
    }
    return <Navigate state={{from: location}} to={"/login"} replacew></Navigate>
};

export default PrivateRoutes;