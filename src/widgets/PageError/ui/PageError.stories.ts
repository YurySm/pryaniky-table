import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from 'widgets/PageError';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Primary: Story = {};
