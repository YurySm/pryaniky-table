import type { Meta, StoryObj } from '@storybook/react';
import { DocsTableRow } from './DocsTableRow';

const meta: Meta<typeof DocsTableRow> = {
    title: '_/DocsTableRow',
    component: DocsTableRow,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DocsTableRow>;

export const Primary: Story = {
    args: {},
};
