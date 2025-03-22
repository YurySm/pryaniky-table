import { JSX } from 'react';
import { useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getUserAuthData } from 'entities/User';
import { Navigate } from 'react-router-dom';
import { RoutesPaths } from 'shared/config/routeConfig/routeConfig';

export const RequireAuth = ({ children } :{children: JSX.Element}) => {
    const auth = useAppSelector(getUserAuthData)

    if(!auth) {
        return <Navigate to={ RoutesPaths.login } replace={ true } />;
    }

    return children;
};