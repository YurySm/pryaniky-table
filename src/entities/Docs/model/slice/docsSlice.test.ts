import { docsReducer } from './docsSlice';
import { DocsResponseItem, DocsSchema } from '../types/docsSchema';
import { Action } from '@reduxjs/toolkit';
import { getDocsList } from '../services/getDocsList/getDocsList';
import { deleteDocsItem } from '../services/deleteDocsItem/deleteDocsItem';
import { editDocsItem } from '../services/editDocsItem/editDocsItem';
import { addDocsItem } from '../services/addDocsItem/addDocsItem';
import { ResponseDataSuccess } from 'shared/api/api.types';

const items: DocsResponseItem[] = [
    {
        id: '1',
        documentName: 'test',
        companySigDate: 'test',
        companySignatureName: 'test',
        documentStatus: 'test',
        documentType: 'test',
        employeeNumber: 'test',
        employeeSigDate: 'test',
        employeeSignatureName: 'test',
    }
]

const newItem: Omit<DocsResponseItem, 'id'> = {
    documentName: 'test',
    companySigDate: 'test',
    companySignatureName: 'test',
    documentStatus: 'test',
    documentType: 'test',
    employeeNumber: 'test',
    employeeSigDate: 'test',
    employeeSignatureName: 'test',
}

const data: ResponseDataSuccess<DocsResponseItem[]> = {
    error_code: 0,
    error_message: '',
    data: items,
    profiling: 'test',
    timings: null
}

const dataWithNull: ResponseDataSuccess<null> = {
    error_code: 0,
    error_message: '',
    data: null,
    profiling: 'test',
    timings: null
}

const upadeteItemData: ResponseDataSuccess<DocsResponseItem> = {
    error_code: 0,
    error_message: '',
    data: items[0],
    profiling: 'test',
    timings: null
}

describe('docsSlice', () => {
    test('getDocsList.pending', () => {
        const state: DeepPartial<DocsSchema> = {
            isLoading: false,
        };

        expect(
            docsReducer(
                state as DocsSchema,
                getDocsList.pending as unknown as Action,
            ),
        ).toEqual({
            isLoading: true,
            error: undefined
        });
    });

    test('getDocsList.fulfilled', () => {
        const state: DeepPartial<DocsSchema> = {
            isLoading: true,
        };

        expect(
            docsReducer(
                state as DocsSchema,
                getDocsList.fulfilled(data, '') as unknown as Action,
            ),
        ).toEqual({
            isLoading: false,
            docsItems: data.data,
        });
    });

    test('getDocsList.rejected', () => {
        const state: DeepPartial<DocsSchema> = {
            isLoading: true,
        };

        expect(
            docsReducer(
                state as DocsSchema,
                getDocsList.rejected(new Error(), '', undefined, 'error') as unknown as Action,
            ),
        ).toEqual({
            isLoading: false,
            error: 'error'
        });
    });

    test('editDocsItem.pending', () => {
        const state: DeepPartial<DocsSchema> = {
            isLoading: false,
        };

        expect(
            docsReducer(
                state as DocsSchema,
                editDocsItem.pending as unknown as Action,
            ),
        ).toEqual({
            isLoading: true,
            error: undefined
        });
    });

    test('editDocsItem.fulfilled', () => {
        const state: DeepPartial<DocsSchema> = {
            isLoading: true,
        };

        expect(
            docsReducer(
                state as DocsSchema,
                editDocsItem.fulfilled(upadeteItemData, '', { docId: items[0].id, doc: items[0] }) as unknown as Action,
            ),
        ).toEqual({
            isLoading: false,
            docsItems: data.data,
        });
    });

    test('editDocsItem.rejected', () => {
        const state: DeepPartial<DocsSchema> = {
            isLoading: true,
        };

        expect(
            docsReducer(
                state as DocsSchema,
                editDocsItem.rejected(new Error(), '', { docId: items[0].id, doc: items[0] }, 'error') as unknown as Action,
            ),
        ).toEqual({
            isLoading: false,
            error: 'error'
        });
    });

    test('addDocsItem.pending', () => {
        const state: DeepPartial<DocsSchema> = {
            isLoading: false,
        };

        expect(
            docsReducer(
                state as DocsSchema,
                addDocsItem.pending as unknown as Action,
            ),
        ).toEqual({
            isLoading: true,
            error: undefined
        });
    });

    test('addDocsItem.fulfilled', () => {
        const state: DeepPartial<DocsSchema> = {
            isLoading: true,
        };

        expect(
            docsReducer(
                state as DocsSchema,
                addDocsItem.fulfilled(upadeteItemData, '', newItem) as unknown as Action,
            ),
        ).toEqual({
            isLoading: false,
            docsItems: [upadeteItemData.data],
        });
    });

    test('editDocsItem.rejected', () => {
        const state: DeepPartial<DocsSchema> = {
            isLoading: true,
        };

        expect(
            docsReducer(
                state as DocsSchema,
                addDocsItem.rejected(new Error(), '', newItem, 'error') as unknown as Action,
            ),
        ).toEqual({
            isLoading: false,
            error: 'error'
        });
    });

    test('deleteDocsItem.pending', () => {
        const state: DeepPartial<DocsSchema> = {
            isLoading: false,
        };

        expect(
            docsReducer(
                state as DocsSchema,
                deleteDocsItem.pending as unknown as Action,
            ),
        ).toEqual({
            isLoading: true,
            error: undefined
        });
    });

    test('deleteDocsItem.fulfilled', () => {
        const state: DeepPartial<DocsSchema> = {
            isLoading: true,
        };

        expect(
            docsReducer(
                state as DocsSchema,
                deleteDocsItem.fulfilled(dataWithNull, '', '1') as unknown as Action,
            ),
        ).toEqual({
            isLoading: false,
            error: undefined,
        });
    });

    test('deleteDocsItem.rejected', () => {
        const state: DeepPartial<DocsSchema> = {
            isLoading: true,
        };

        expect(
            docsReducer(
                state as DocsSchema,
                deleteDocsItem.rejected(new Error(), '', '1', 'error') as unknown as Action,
            ),
        ).toEqual({
            isLoading: false,
            error: 'error'
        });
    });


});
