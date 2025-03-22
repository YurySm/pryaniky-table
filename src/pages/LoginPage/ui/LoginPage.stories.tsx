import type { Meta, StoryObj } from '@storybook/react';
import LoginPage from './LoginPage';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof LoginPage> = {
    title: 'pages/LoginPage',
    component: LoginPage,
    decorators: [StoreDecorator({
        user: {
            authData: 'test'
        }
    })]
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Primary: Story = {
    args: {},
};
