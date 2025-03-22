import type { Meta, StoryObj } from '@storybook/react';
import { DocsTable } from './DocsTable';

const meta: Meta<typeof DocsTable> = {
    title: 'feature/DocsTable',
    component: DocsTable,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DocsTable>;

export const Primary: Story = {
    args: {},
};
