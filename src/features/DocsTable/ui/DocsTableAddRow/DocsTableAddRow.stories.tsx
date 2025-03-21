import type { Meta, StoryObj } from '@storybook/react';
import { DocsTableAddRow } from './DocsTableAddRow';

const meta: Meta<typeof DocsTableAddRow> = {
    title: '_/DocsTableEditRow',
    component: DocsTableAddRow,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DocsTableAddRow>;

export const Primary: Story = {
    args: {},
};
