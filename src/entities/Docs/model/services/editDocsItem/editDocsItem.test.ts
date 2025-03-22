import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { editDocsItem } from './editDocsItem';
import { DocsResponseItem } from 'entities/Docs';

const docsItem: DocsResponseItem = {
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

describe('editDocsItem', () => {
    test('fulfilled', async () => {
        const thunk = new TestAsyncThunk(editDocsItem);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: { error_code: 0 } }));

        const result = await thunk.callThunk({ docId: '1', doc: docsItem });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual({ error_code: 0 });
    });

    test('rejected with undefined data', async () => {
        const thunk = new TestAsyncThunk(editDocsItem);
        thunk.api.post.mockReturnValue(Promise.resolve({ error_code: 1234 }));

        const result = await thunk.callThunk({ docId: '1', doc: docsItem });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
