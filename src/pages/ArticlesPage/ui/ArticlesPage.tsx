import cls from './ArticlesPage.module.scss';
import { memo } from 'react';
import clsx from 'clsx';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={ clsx(cls.ArticlesPage, {}, [className]) }>
            ArticlesPage
        </div>
    );
};

export default memo(ArticlesPage);