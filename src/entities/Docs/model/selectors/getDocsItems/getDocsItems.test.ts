import { StateSchema } from 'app/providers/StoreProvider';
import { getDocsItems } from './getDocsItems';
import { DocsResponseItem } from '../../types/docsSchema';

describe('getDocsItems', () => {
    test('should return the correct value', () => {
        const docsItems: DocsResponseItem[] = [
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
            },
            {
                id: '2',
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

        const state: DeepPartial<StateSchema> = {
            docs: {
                docsItems
            },
        };
        expect(getDocsItems(state as StateSchema)).toEqual(docsItems);
    });

    test('should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getDocsItems(state as StateSchema)).toBe(undefined);
    })
});
