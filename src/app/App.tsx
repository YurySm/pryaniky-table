import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { useEffect } from 'react';
import { getUserInited, userActions } from 'entities/User';
import clsx from 'clsx';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useAppSelector(getUserInited)

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={ clsx('app', {}, [theme]) }>
            {inited && <AppRouter />}
        </div>
    );
};
