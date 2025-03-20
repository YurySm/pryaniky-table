import type { Meta, StoryObj } from '@storybook/react';
import { DocsTableDeleteRow } from './DocsTableDeleteRow';

const meta: Meta<typeof DocsTableDeleteRow> = {
    title: '_/DocsTableDeleteRow',
    component: DocsTableDeleteRow,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DocsTableDeleteRow>;

export const Primary: Story = {
    args: {},
};
