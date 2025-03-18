import cls from './PageLoader.module.scss';
import clsx from 'clsx';
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={ clsx(cls.pageLoader, {}, [className]) }>
        <Loader />
    </div>
);
