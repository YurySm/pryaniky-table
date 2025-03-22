import { StateSchema } from 'app/providers/StoreProvider';
import { getDocsIsLoading } from './getDocsIsLoading';

describe('getDocsIsLoading', () => {
    test('should return the correct value', () => {
        const state: DeepPartial<StateSchema> = {
            docs: {
                isLoading: true
            },
        };
        expect(getDocsIsLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getDocsIsLoading(state as StateSchema)).toBe(false);
    })
});
