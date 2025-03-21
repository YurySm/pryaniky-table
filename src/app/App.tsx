import { AppRouter } from 'app/providers/router';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { useEffect } from 'react';
import {
    getUserInited,
    userActions
} from 'entities/User';

export const App = () => {
    const dispatch = useAppDispatch();
    const inited = useAppSelector(getUserInited)

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={ 'app' }>
            {inited && <AppRouter/>}
        </div>
    );
};
