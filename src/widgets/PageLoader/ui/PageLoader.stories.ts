import type { Meta, StoryObj } from '@storybook/react';
import { PageLoader } from 'widgets/PageLoader';

const meta: Meta<typeof PageLoader> = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Light: Story = {};
