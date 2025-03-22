import type { Meta, StoryObj } from '@storybook/react';
import { DocsTableRow } from './DocsTableRow';
import { DocsResponseItem } from 'entities/Docs';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

const doc: DocsResponseItem = {
    id: '1',
    documentName: 'test',
    companySigDate: '2025-03-22T12:16:44.545Z',
    companySignatureName: 'test',
    documentStatus: 'test',
    documentType: 'test',
    employeeNumber: 'test',
    employeeSigDate: '2025-03-22T12:16:44.545Z',
    employeeSignatureName: 'test',
}

const meta: Meta<typeof DocsTableRow> = {
    title: 'feature/DocsTableRow',
    component: DocsTableRow,
    args: {
        doc
    },
    decorators: [
        StoreDecorator({
            docs: {
                docsItems: []
            }
        })
    ]
};

export default meta;
type Story = StoryObj<typeof DocsTableRow>;

export const Primary: Story = {
};
