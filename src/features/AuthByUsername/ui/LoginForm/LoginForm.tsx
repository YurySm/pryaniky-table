import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
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


interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();

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
        if (res.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, password, username, onSuccess]);

    return (
        <DynamicModuleLoader reducers={ initialReducers }>
            <div className={ clsx(cls.loginForm, {}, [className]) }>
                <p>Авторизация</p>

                {error && (
                    <p>Вы ввели неверный логин или пароль</p>
                )}
                {/*<Input*/}
                {/*    onChange={ changeUsername }*/}
                {/*    autofocus*/}
                {/*    placeholder={ t('Логин') }*/}
                {/*    value={ username }*/}
                {/*/>*/}
                {/*<Input*/}
                {/*    onChange={ changePassword }*/}
                {/*    placeholder={ t('Пароль') }*/}
                {/*    value={ password }*/}
                {/*/>*/}
                {/*<Button disabled={ isLoading } onClick={ onLoginClick }>*/}
                {/*    {t('Войти')}*/}
                {/*</Button>*/}
            </div>
        </DynamicModuleLoader>
    );
};

export default LoginForm;
