import { createAsyncThunk } from '@reduxjs/toolkit';
import { ResponseDataReject, ResponseDataSuccess } from 'shared/api/api.types';
import { DocsResponseItem, getDocsList } from 'entities/Docs';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const deleteDocsItem = createAsyncThunk<
    ResponseDataReject | ResponseDataSuccess<DocsResponseItem[]>,  /// поправить
    string,
    ThunkConfig<string>
>('docs/deleteDocsItem', async (id: string, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI;
    try {
        const response = await extra.api.post<ResponseDataReject | ResponseDataSuccess<DocsResponseItem[]>>(`userdocs/delete/${id}`);

        console.log(response.data);
        
        if(response.data.error_code === 0) {
            dispatch(getDocsList())
        }

        return response.data;
    } catch {
        return rejectWithValue('error');
    }
});
