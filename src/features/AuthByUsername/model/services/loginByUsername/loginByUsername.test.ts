import { loginByUsername } from './loginByUsername';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

describe('loginByUsername', () => {
    test('fulfilled', async () => {
        const token = { token: 'test' };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: { data: token } }));
        const result = await thunk.callThunk({
            password: '123',
            username: '123',
        });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual({ data: token });
    });

    test('rejected', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ error_text: 'error' }));
        const result = await thunk.callThunk({
            password: '123',
            username: '123',
        });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
