import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { deleteDocsItem } from './deleteDocsItem';


describe('deleteDocsItem', () => {
    test('fulfilled', async () => {
        const thunk = new TestAsyncThunk(deleteDocsItem);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: { error_code: 0 } }));

        const result = await thunk.callThunk('testId');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual({ error_code: 0 });
    });

    test('rejected with undefined data', async () => {
        const thunk = new TestAsyncThunk(deleteDocsItem);
        thunk.api.post.mockReturnValue(Promise.resolve({ error_code: 1234 }));

        const result = await thunk.callThunk('testId');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
