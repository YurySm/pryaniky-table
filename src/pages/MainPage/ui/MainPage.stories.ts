import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    decorators: [StoreDecorator({
        user: {
            authData: 'test'
        },
        docs: {
            docsItems: []
        }
    })]
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Primary: Story = {};
