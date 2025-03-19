import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { StateSchema } from 'app/providers/StoreProvider';

const tmpState: StateSchema = {
    loginForm: {
        username: 'test',
        password: 'test',
        isLoading: false,
    },
    user: {
        authData: undefined,
    },
};

const meta: Meta<typeof LoginForm> = {
    title: 'feature/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    decorators: [StoreDecorator(tmpState)],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {};

export const WithError: Story = {
    decorators: [
        StoreDecorator({
            ...tmpState,
            loginForm: {
                ...tmpState.loginForm,
                error: 'Error',
            },
        }),
    ],
};

export const IsLoading: Story = {
    decorators: [
        StoreDecorator({
            ...tmpState,
            loginForm: {
                ...tmpState.loginForm,
                isLoading: true,
            },
        }),
    ],
};
