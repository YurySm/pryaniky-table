import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { addDocsItem } from './addDocsItem';
import { DocsResponseItem } from 'entities/Docs';

const newDocsItem: Omit<DocsResponseItem, 'id'> = {
    documentName: 'test',
    companySigDate: 'test',
    companySignatureName: 'test',
    documentStatus: 'test',
    documentType: 'test',
    employeeNumber: 'test',
    employeeSigDate: 'test',
    employeeSignatureName: 'test',
}

describe('addDocsItem', () => {
    test('fulfilled', async () => {
        const thunk = new TestAsyncThunk(addDocsItem);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: { error_code: 0, data: { ...newDocsItem, id: '1' } } }));

        const result = await thunk.callThunk(newDocsItem);

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual({ error_code: 0, data: { ...newDocsItem, id: '1' } });
    });

    test('rejected with undefined data', async () => {
        const thunk = new TestAsyncThunk(addDocsItem);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: null }));

        const result = await thunk.callThunk(newDocsItem);

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
