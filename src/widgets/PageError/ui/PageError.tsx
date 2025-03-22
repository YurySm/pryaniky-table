import cls from './PageError.module.scss';
import clsx from 'clsx';
import { Button, Typography } from '@mui/material';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {

    const reload = () => {
        location.reload();
    };
    return (
        <div className={ clsx(cls.pageError, className) }>
            <Typography
                color={ 'error' }
                variant="h4">
                {'Произошла непредвиденная ошибка'}
            </Typography>
            <Button
                sx={{ marginTop: 5 }}
                onClick={ reload }
                variant={ 'outlined' }
                size={ 'large' }
            >
                {'Обновить страницу'}
            </Button>
        </div>
    );
};
