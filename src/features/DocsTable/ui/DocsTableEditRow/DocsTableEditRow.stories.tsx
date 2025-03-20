import type { Meta, StoryObj } from '@storybook/react';
import { DocsTableEditRow } from './DocsTableEditRow';

const meta: Meta<typeof DocsTableEditRow> = {
    title: '_/DocsTableEditRow',
    component: DocsTableEditRow,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DocsTableEditRow>;

export const Primary: Story = {
    args: {},
};
