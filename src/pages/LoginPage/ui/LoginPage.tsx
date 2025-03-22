import cls from './LoginPage.module.scss';
import { memo } from 'react';
import clsx from 'clsx';
import { LoginForm } from 'features/AuthByUsername';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutesPaths } from 'shared/config/routeConfig/routeConfig';
import { useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getUserAuthData } from 'entities/User';
import { Header } from 'widgets/Header';

interface ArticlesPageProps {
    className?: string;
}

const LoginPage = (props: ArticlesPageProps) => {
    const {
        className,
    } = props;
    const auth = useAppSelector(getUserAuthData)
    const location = useLocation()

    if (auth && location.pathname === '/login') {
        return <Navigate to={ RoutesPaths.main } replace/>
    }

    return (
        <>
            <Header position={ 'absolute' }/>
            <div className={ clsx(cls.loginPage, className) }>
                <LoginForm/>
            </div>
        </>

    );
};

export default memo(LoginPage);