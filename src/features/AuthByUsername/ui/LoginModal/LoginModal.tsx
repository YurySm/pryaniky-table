
import { LoginFormLazy as LoginForm } from '../LoginForm/LoginForm.lazy';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import clsx from 'clsx';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <div
        className={ clsx('', {}, [className]) }
        // isOpen={ isOpen }
        // onClose={ onClose }
        // lazy
    >
        <Suspense fallback={ <Loader /> }>
            <LoginForm onSuccess={ onClose } />
        </Suspense>
    </div>
);
