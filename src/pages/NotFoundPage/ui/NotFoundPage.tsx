import cls from './NotFoundPage.module.scss';
import clsx from 'clsx';
import { Typography } from '@mui/material';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    return (
        <div className={ clsx(cls.notFountPage, className) }>
            <Typography
                variant="h5"
                align={ 'center' }
            >
                Страница не найдена
            </Typography>
        </div>
    );
};
