import { StateSchema } from 'app/providers/StoreProvider';
import { getDocsErrors } from './getDocsErrors';

describe('getDocsErrors', () => {
    test('should return the correct value', () => {
        const state: DeepPartial<StateSchema> = {
            docs: {
                error: 'error'
            },
        };
        expect(getDocsErrors(state as StateSchema)).toBe('error' );
    });

    test('should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getDocsErrors(state as StateSchema)).toBe(undefined);
    })
});
