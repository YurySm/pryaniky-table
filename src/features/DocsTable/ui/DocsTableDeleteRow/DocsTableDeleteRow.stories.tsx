import type { Meta, StoryObj } from '@storybook/react';
import { DocsTableDeleteRow } from './DocsTableDeleteRow';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { DocsResponseItem } from 'entities/Docs';

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

const meta: Meta<typeof DocsTableDeleteRow> = {
    title: 'feature/DocsTableDeleteRow',
    component: DocsTableDeleteRow,
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
type Story = StoryObj<typeof DocsTableDeleteRow>;

export const Primary: Story = {};
