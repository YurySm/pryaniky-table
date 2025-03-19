import { useTranslation } from 'react-i18next';
import { ChangeEvent, useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import {
    useAppDispatch,
    useAppSelector,
} from 'app/providers/StoreProvider/config/store';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import clsx from 'clsx';
import cls from './LoginForm.module.scss'
import { Button, Paper, TextField, Typography } from '@mui/material';


interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

export const LoginForm = ({ className }: LoginFormProps) => {
    const dispatch = useAppDispatch();

    const username = useAppSelector(getLoginUsername);
    const password = useAppSelector(getLoginPassword);
    const error = useAppSelector(getLoginError);
    const isLoading = useAppSelector(getLoginIsLoading);

    const changeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const changePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const res = await dispatch(loginByUsername({ username, password }));
        // if (res.meta.requestStatus === 'fulfilled') {
        //     onSuccess();
        // }
    }, [dispatch, password, username]);

    return (
        <DynamicModuleLoader reducers={ initialReducers }>
            <div className={ clsx(cls.loginForm, {}, [className]) }>
                <Paper
                    className={ cls.form }
                    elevation={ 6 }
                >
                    {error && (
                        <p>Вы ввели неверный логин или пароль</p>
                    )}

                    <Typography
                        variant="h2"
                        className={ cls.formTitle }
                    >
                        Авторизация
                    </Typography>

                    <TextField
                        label="Логин"
                        variant="outlined"
                        value={ username }
                        onChange={ (event: ChangeEvent<HTMLInputElement>) => {
                            changeUsername(event.target.value);
                        } }
                    />

                    <TextField
                        label="Пароль"
                        variant="outlined"
                        value={ password }
                        onChange={ (event: ChangeEvent<HTMLInputElement>) => {
                            changePassword(event.target.value);
                        } }
                    />

                    <Button
                        disabled={ isLoading }
                        onClick={ onLoginClick }
                        variant="contained"
                    >
                        Войти
                    </Button>
                </Paper>
            </div>
        </DynamicModuleLoader>
    );
};