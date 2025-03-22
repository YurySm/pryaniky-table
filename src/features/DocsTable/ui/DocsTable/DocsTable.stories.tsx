import type { Meta, StoryObj } from '@storybook/react';
import { DocsTable } from './DocsTable';
import { DocsResponseItem } from 'entities/Docs';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

const docs: DocsResponseItem[] = [
    {
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
]

const meta: Meta<typeof DocsTable> = {
    title: 'feature/DocsTable',
    component: DocsTable,
    args: {
        docs
    },
    decorators: [
        StoreDecorator({
            docs: {
                docsItems: docs
            }
        })
    ]
};

export default meta;
type Story = StoryObj<typeof DocsTable>;

export const Primary: Story = {};
