import type { Meta, StoryObj } from '@storybook/react';
import { DocsTableAddRow } from './DocsTableAddRow';

const meta: Meta<typeof DocsTableAddRow> = {
    title: 'feature/DocsTableAddRow',
    component: DocsTableAddRow,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DocsTableAddRow>;

export const Primary: Story = {
    args: {},
};
