import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { userActions } from 'entities/User';
import { useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import { RoutesPaths } from 'shared/config/routeConfig/routeConfig';

export const Header = () => {
    const dispatch = useAppDispatch();

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout());
        return <Navigate to={ RoutesPaths.login } replace/>
    }, [dispatch])

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Таблицы
                </Typography>

                <Button
                    onClick={ handleLogout }
                    color="inherit">Выйти</Button>
            </Toolbar>
        </AppBar>
    );
};