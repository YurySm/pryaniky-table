import cls from './LoginPage.module.scss';
import { memo } from 'react';
import clsx from 'clsx';
import { LoginForm } from 'features/AuthByUsername';

interface ArticlesPageProps {
    className?: string;
}

const LoginPage = (props: ArticlesPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={ clsx(cls.loginPage, {}, [className]) }>
            <LoginForm/>
        </div>
    );
};

export default memo(LoginPage);