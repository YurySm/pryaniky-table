import type { Meta, StoryObj } from '@storybook/react';
import { DocsTableAddRow } from './DocsTableAddRow';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof DocsTableAddRow> = {
    title: 'feature/DocsTableAddRow',
    component: DocsTableAddRow,
    argTypes: {},
    decorators: [
        StoreDecorator({
            docs: {
                docsItems: []
            }
        })
    ]
};

export default meta;
type Story = StoryObj<typeof DocsTableAddRow>;

export const Primary: Story = {
    args: {},
};
