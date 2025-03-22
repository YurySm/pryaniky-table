import type { Meta, StoryObj } from '@storybook/react';
import { DocsTableEditRow } from './DocsTableEditRow';

const meta: Meta<typeof DocsTableEditRow> = {
    title: 'feature/DocsTableEditRow',
    component: DocsTableEditRow,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DocsTableEditRow>;

export const Primary: Story = {
    args: {},
};
