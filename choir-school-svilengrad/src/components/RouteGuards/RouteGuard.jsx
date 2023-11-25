import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { Usercontext } from '../../contexts/UserContext';
import { useDispatch } from 'react-redux';
import { setError } from "../../reduxStates/store";

const RouteGuard = ({
    children,
}) => {

    const {isAuthenticated, hasAccess} = useContext(Usercontext)
    const dispatch = useDispatch()

   
    
    if (!isAuthenticated) {
        dispatch(setError('You do not have access to this resources.Please log in!'));
        return <Navigate to="/auth/login" />;
    }
    if (!hasAccess) {
        dispatch(setError('You should be member of Choir School.Please join us :)'));
        return <Navigate to="/formations" />;
    }

    return children ? children : <Outlet />
};

export default RouteGuard