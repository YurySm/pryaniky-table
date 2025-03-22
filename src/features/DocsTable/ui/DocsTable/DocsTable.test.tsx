import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { DocsTable } from './DocsTable';
import { docsReducer, DocsResponseItem } from 'entities/Docs';
import { screen } from '@testing-library/dom';
import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import ru from 'dayjs/locale/ru';

dayjs.extend(utc);
dayjs.locale(ru)


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

describe('DocsTable', () => {
    test('only render', async () => {
        componentRender(<DocsTable />, {
            initialState: {
                user: {
                    authData: 'test',
                    _inited: true
                },
                docs: {
                    docsItems: docs
                }
            },
            asyncReducers: {
                docs: docsReducer
            }
        });

        const tableRow = await screen.findByTestId('tableRow');
        expect(tableRow).toBeInTheDocument();
        expect(await screen.getByTestId('documentName')).toBeInTheDocument();
        expect(await screen.getByTestId('documentName')).toHaveTextContent('test');
        expect(await screen.getByTestId('employeeSigDate')).toBeInTheDocument();
        expect(await screen.getByTestId('employeeSigDate')).toHaveTextContent((dayjs.utc('2025-03-22T12:16:44.545Z').format('D MMMM YYYY, HH:mm')).toString());
    });
});
