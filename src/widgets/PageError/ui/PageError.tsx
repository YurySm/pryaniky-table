import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';
import clsx from "clsx";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reload = () => {
        location.reload();
    };
    return (
        <div className={ clsx(cls.pageError, {}, [className]) }>
            <p className={ clsx(cls.title) }>
                {'Произошла непредвиденная ошибка'}
            </p>
            <button
                onClick={ reload }
                type="button"
                className={ clsx(cls.btn) }
            >
                {'Обновить страницу'}
            </button>
        </div>
    );
};
