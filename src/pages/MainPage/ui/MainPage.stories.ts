import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { DocsResponseItem } from 'entities/Docs';

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

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    decorators: [StoreDecorator({
        docs: {
            isLoading: false,
            error: undefined,
            docsItems: docs
        }
    })]
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Primary: Story = {};
