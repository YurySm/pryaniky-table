import cls from './PageLoader.module.scss';
import clsx from 'clsx';
import { CircularProgress } from '@mui/material';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={ clsx(cls.pageLoader, className) }>
        <CircularProgress />
    </div>
);
