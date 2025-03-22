import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { getDocsList } from './getDocsList'
import { DocsResponseItem } from '../../types/docsSchema';

const docs: DocsResponseItem[] = [{
    id: '1',
    documentName: 'test',
    companySigDate: 'test',
    companySignatureName: 'test',
    documentStatus: 'test',
    documentType: 'test',
    employeeNumber: 'test',
    employeeSigDate: 'test',
    employeeSignatureName: 'test',
}]

describe('getDocsList', () => {
    test('fulfilled', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-expect-error
        const thunk = new TestAsyncThunk(getDocsList);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: { data: docs } }));

        const result = await thunk.callThunk(undefined);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual({ data:  docs });
    });

    test('rejected with undefined data', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-expect-error
        const thunk = new TestAsyncThunk(getDocsList);
        thunk.api.get.mockReturnValue(Promise.resolve({ error_text: 'error' }));

        const result = await thunk.callThunk(undefined);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
