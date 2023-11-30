import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { Usercontext } from '../../contexts/UserContext';
import { useDispatch } from 'react-redux';
import { setError } from "../../reduxStates/store";

const RouteChoristerGuard = ({
    children,
}) => {

    const {isChorister} = useContext(Usercontext)
    const dispatch = useDispatch()

   
    if (!isChorister) {
        dispatch(setError('You should be member of Choir School to view these resources.Please join us :)'));
        return <Navigate to="/formations" />;
    }

    return children ? children : <Outlet />
};

export default RouteChoristerGuard