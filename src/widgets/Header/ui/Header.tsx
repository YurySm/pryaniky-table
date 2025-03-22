import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getUserAuthData, userActions } from 'entities/User';
import { useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import { RoutesPaths } from 'shared/config/routeConfig/routeConfig';

interface HeaderProps {
    position?:  'fixed' | 'static' | 'absolute' | 'sticky' | 'relative'
}

export const Header = ({ position = 'static' }: HeaderProps) => {
    const dispatch = useAppDispatch();
    const auth = useAppSelector(getUserAuthData)

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout());
        return <Navigate to={ RoutesPaths.login } replace/>
    }, [dispatch])

    return (
        <AppBar position={ position }>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Таблицы
                </Typography>

                {
                    auth &&
                    <Button
                        onClick={ handleLogout }
                        color="inherit">Выйти</Button>
                }
            </Toolbar>
        </AppBar>
    );
};