import { createAsyncThunk } from '@reduxjs/toolkit';
import { ResponseDataReject, ResponseDataSuccess } from 'shared/api/api.types';
import { DocsResponseItem } from 'entities/Docs';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const addDocsItem = createAsyncThunk<
    ResponseDataReject | ResponseDataSuccess<DocsResponseItem>,
    Omit<DocsResponseItem, 'id'>,
    ThunkConfig<string>
>('docs/addDocsItem', async (newDoc, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.post<ResponseDataReject | ResponseDataSuccess<DocsResponseItem>>(`userdocs/create`, newDoc);

        if(response.data.error_code === 0) {
            return response.data;
        }

        throw new Error();
    } catch {
        return rejectWithValue('error');
    }
});
