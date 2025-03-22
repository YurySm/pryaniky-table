import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof Header> = {
    title: 'widgets/Header',
    component: Header,
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {};
export const PrimaryWithAuth: Story = {
    decorators: [StoreDecorator({
        user: {
            authData: 'test'
        }
    })]
};
