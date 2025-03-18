import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import clsx from "clsx";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={ clsx(cls.notFountPage, {}, [className]) }>
            {t('Страница не найдена')}
        </div>
    );
};
