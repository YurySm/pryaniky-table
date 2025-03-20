import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ResponseDataReject, ResponseDataSuccess } from 'shared/api/api.types';
import { DocsResponseItem } from '../../types/docsSchema';

export const getDocsList = createAsyncThunk<
    ResponseDataReject | ResponseDataSuccess<DocsResponseItem[]>,
    void,
    ThunkConfig<string>
>('docs/getDocsList', async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.get<ResponseDataReject | ResponseDataSuccess<DocsResponseItem[]>>('userdocs/get');

        if (!response.data.data) {
            throw new Error(response.data.error_text);
        }

        return response.data;
    } catch {
        return rejectWithValue('error');
    }
});
