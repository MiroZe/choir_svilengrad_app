import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { Usercontext } from '../../contexts/UserContext';
import { useDispatch } from 'react-redux';
import { setError } from "../../reduxErrorState/store";

const RouteAdminGuard = ({
    children,
}) => {

    const {isAdmin} = useContext(Usercontext)
    const dispatch = useDispatch()


    
    if (!isAdmin) {
        dispatch(setError('You do not have access to this resource!'));
        return <Navigate to="/" />;
    }
   

    return children ? children : <Outlet />
};

export default RouteAdminGuard