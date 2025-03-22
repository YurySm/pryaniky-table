import type { Meta, StoryObj } from '@storybook/react';
import { DocsTableEditRow } from './DocsTableEditRow';
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

const meta: Meta<typeof DocsTableEditRow> = {
    title: 'feature/DocsTableEditRow',
    component: DocsTableEditRow,
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
type Story = StoryObj<typeof DocsTableEditRow>;

export const Primary: Story = {};
